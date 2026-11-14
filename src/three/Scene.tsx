import { Component, ReactNode, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, ChromaticAberration, EffectComposer, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import { coreShape, galaxyShape, helixShape, knotShape, randoms, skylineShape, textShape } from "./shapes";

const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const mouse = { x: 0, y: 0 };
if (typeof window !== "undefined") {
  window.addEventListener("pointermove", (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
  });
}
const damp = THREE.MathUtils.damp;
const smooth = THREE.MathUtils.smoothstep;
const speed = reduced ? 0.15 : 1;

/** page section → particle shape index (0 core · 1 skyline · 2 knot · 3 galaxy · 4 helix · 5 text) */
const SECTIONS = ["home", "about", "skills", "projects", "cases", "certs", "contact"];
const SHAPE_OF = [0, 1, 2, 3, 3, 4, 5];
const OFFSET_X = [0.22, -0.24, 0.24, 0, 0, 0.26, 0]; // fraction of viewport width, per shape index of SHAPE_OF
const OFFSET_Y = [0, 0, 0, 0, 0, 0, 2.5];
const SCALE = [1, 0.95, 1.05, 1.0, 1.0, 0.9, 1];
const OPACITY = [1, 0.7, 0.75, 0.38, 0.38, 0.7, 1];

/** Continuous "which shape are we on" value from the real DOM positions of the sections. */
function sectionState(out: { seg: number; ox: number; oy: number; sc: number; op: number }) {
  const y = window.innerHeight * 0.5;
  const tops = SECTIONS.map((id) => document.getElementById(id)?.getBoundingClientRect().top ?? 1e9);
  let i = 0;
  for (let k = 0; k < tops.length; k++) if (tops[k] <= y) i = k;
  const next = Math.min(i + 1, SECTIONS.length - 1);
  const span = tops[next] - tops[i] || 1;
  const u = i === next ? 0 : Math.min(1, Math.max(0, (y - tops[i]) / span));
  const t = i === next ? 0 : smooth(u, 0.45, 1);
  const L = (a: number[]) => a[i] + (a[next] - a[i]) * t;
  out.seg = SHAPE_OF[i] + (SHAPE_OF[next] - SHAPE_OF[i]) * t;
  out.ox = L(OFFSET_X); out.oy = L(OFFSET_Y); out.sc = L(SCALE); out.op = L(OPACITY);
}

const vert = /* glsl */ `
  attribute vec3 aP0; attribute vec3 aP1; attribute vec3 aP2; attribute vec3 aP3; attribute vec3 aP4; attribute vec3 aP5;
  attribute vec4 aRand;
  uniform float uTime; uniform float uSeg; uniform float uPix; uniform vec3 uMouse; uniform float uMouseOn;
  varying vec3 vCol; varying float vGlow;

  vec3 pick(float i){
    if(i<0.5) return aP0; if(i<1.5) return aP1; if(i<2.5) return aP2;
    if(i<3.5) return aP3; if(i<4.5) return aP4; return aP5;
  }
  vec3 flow(vec3 p,float t){
    return vec3(sin(p.y*1.3+t)+sin(p.z*0.7-t*0.8), sin(p.z*1.1+t*0.9)+sin(p.x*0.8+t*0.5), sin(p.x*1.2-t*0.7)+sin(p.y*0.9+t*0.6));
  }
  void main(){
    float i0 = clamp(floor(uSeg), 0.0, 5.0);
    float i1 = min(i0+1.0, 5.0);
    float f = clamp(uSeg - i0, 0.0, 1.0);
    float st = aRand.x*0.4;
    float ff = smoothstep(st, st+0.6, f);
    vec3 pos = mix(pick(i0), pick(i1), ff);
    float mid = sin(ff*3.14159);
    pos += flow(pos*0.55 + aRand.yzw*6.0, uTime*0.45) * (0.05 + 1.6*mid*aRand.y);
    pos += normalize(pos+vec3(1e-3)) * sin(uTime*0.9 + aRand.z*6.2831) * 0.035;

    vec4 world = modelMatrix * vec4(pos,1.0);
    vec3 d = world.xyz - uMouse;
    float dist = length(d.xy);
    float push = uMouseOn * exp(-dist*dist*0.45) * 1.4;
    world.xyz += normalize(vec3(d.xy, 0.4)) * push;

    vec4 mv = viewMatrix * world;
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (aRand.w*1.7 + 0.7) * uPix * (1.0 + mid*0.7 + push*0.5) * (8.5 / -mv.z);

    vec3 emerald = vec3(0.06,0.95,0.65);
    vec3 cyan = vec3(0.2,0.75,1.0);
    vec3 gold = vec3(1.0,0.78,0.25);
    vec3 c = mix(emerald, cyan, aRand.y);
    c = mix(c, gold, step(0.86, aRand.z));
    vCol = c;
    vGlow = 0.55 + aRand.w*0.6 + mid*0.5 + push*0.4;
  }
`;
const frag = /* glsl */ `
  uniform float uOpacity; varying vec3 vCol; varying float vGlow;
  void main(){
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d); a *= a;
    gl_FragColor = vec4(vCol * vGlow, a * uOpacity);
  }
`;

function Particles() {
  const { size, camera } = useThree();
  const mobile = size.width < 768;
  const N = mobile ? 15000 : 42000;
  const mesh = useRef<THREE.Points>(null!);
  const state = useRef({ seg: 0, ox: 0.22, oy: 0, sc: 1, op: 1 });
  const mpos = useMemo(() => new THREE.Vector3(), []);
  const ray = useMemo(() => new THREE.Vector3(), []);

  const { geo, mat } = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const shapes = [coreShape(N), skylineShape(N), knotShape(N), galaxyShape(N), helixShape(N), coreShape(N)];
    g.setAttribute("position", new THREE.BufferAttribute(shapes[0], 3));
    shapes.forEach((s, i) => g.setAttribute(`aP${i}`, new THREE.BufferAttribute(s, 3)));
    g.setAttribute("aRand", new THREE.BufferAttribute(randoms(N), 4));
    const m = new THREE.ShaderMaterial({
      vertexShader: vert, fragmentShader: frag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uSeg: { value: 0 }, uPix: { value: 1 }, uMouse: { value: new THREE.Vector3(99, 99, 0) }, uMouseOn: { value: 0 }, uOpacity: { value: 1 } },
    });
    return { geo: g, mat: m };
  }, [N]);

  // Contact shape is text → build once fonts are ready (needs the display font).
  useEffect(() => {
    let alive = true;
    (document.fonts?.load("800 100px Sora") ?? Promise.resolve()).catch(() => null).then(() => {
      if (!alive) return;
      const arr = textShape(N, "LET'S TALK", mobile ? 6.4 : 10);
      (geo.getAttribute("aP5") as THREE.BufferAttribute).set(arr);
      (geo.getAttribute("aP5") as THREE.BufferAttribute).needsUpdate = true;
    });
    return () => { alive = false; };
  }, [geo, N, mobile]);

  useFrame((s, dt) => {
    const u = mat.uniforms;
    const st = state.current;
    const target = { seg: 0, ox: 0, oy: 0, sc: 1, op: 1 };
    sectionState(target);
    st.seg = damp(st.seg, target.seg, 5, dt);
    st.ox = damp(st.ox, target.ox, 3, dt);
    st.sc = damp(st.sc, target.sc, 3, dt);
    st.oy = damp(st.oy, target.oy, 3, dt);
    st.op = damp(st.op, target.op, 3, dt);

    u.uTime.value = s.clock.elapsedTime * speed;
    u.uSeg.value = st.seg;
    u.uPix.value = s.gl.getPixelRatio();
    u.uOpacity.value = st.op * (mobile ? 0.55 : 1);

    const wx = mobile ? 0 : st.ox * (s.viewport.width + 6);
    mesh.current.position.x = wx;
    mesh.current.position.y = (mobile ? 1.2 : 0) + st.oy * (mobile ? 0.6 : 1);
    mesh.current.scale.setScalar(st.sc * (mobile ? 0.62 : 1));
    mesh.current.rotation.y = s.clock.elapsedTime * 0.07 * speed + st.seg * 0.9 + mouse.x * 0.2;
    mesh.current.rotation.x = damp(mesh.current.rotation.x, mouse.y * 0.12, 3, dt);

    // pointer → world position on the z=0 plane, used by the shader to push particles away
    ray.set(mouse.x, -mouse.y, 0.5).unproject(camera).sub(camera.position).normalize();
    const k = -camera.position.z / ray.z;
    mpos.copy(camera.position).addScaledVector(ray, k);
    u.uMouse.value.lerp(mpos, 0.2);
    u.uMouseOn.value = damp(u.uMouseOn.value, fine ? 1 : 0, 4, dt);
  });

  return <points ref={mesh} geometry={geo} material={mat} frustumCulled={false} />;
}

function Rig() {
  useFrame((s, dt) => {
    const cam = s.camera;
    const p = Math.min(1, window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight));
    cam.position.x = damp(cam.position.x, mouse.x * 0.6 + Math.sin(p * 6.28) * 0.8, 2.5, dt);
    cam.position.y = damp(cam.position.y, -mouse.y * 0.4, 2.5, dt);
    cam.position.z = damp(cam.position.z, 10 - Math.sin(p * Math.PI) * 1.2, 2.5, dt);
    cam.lookAt(0, 0, 0);
  });
  return null;
}

function Effects() {
  const offset = useMemo(() => new THREE.Vector2(0.0007, 0.0009), []);
  return (
    <EffectComposer multisampling={0}>
      <Bloom mipmapBlur intensity={1.35} luminanceThreshold={0.08} luminanceSmoothing={0.5} radius={0.8} />
      <ChromaticAberration offset={offset} radialModulation={false} modulationOffset={0} />
      <Vignette eskil={false} offset={0.2} darkness={0.85} />
    </EffectComposer>
  );
}

class Boundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

function webglOk() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch { return false; }
}

export default function Scene() {
  if (!webglOk()) return null;
  return (
    <Boundary>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 10], fov: 48, near: 0.1, far: 60 }}
        gl={{ antialias: false, powerPreference: "high-performance", alpha: false }}
        style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      >
        <color attach="background" args={["#04060b"]} />
        <Particles />
        <Rig />
        <Effects />
      </Canvas>
    </Boundary>
  );
}
