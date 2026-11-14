import { Component, ReactNode, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { MotionValue, useScroll } from "framer-motion";

const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const mouse = { x: 0, y: 0 };
if (typeof window !== "undefined") {
  window.addEventListener("pointermove", (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
  });
}

const damp = THREE.MathUtils.damp;
const lerp = THREE.MathUtils.lerp;
const speed = reduced ? 0.15 : 1;

/* ---------- Market surface: a living 3D bar chart ---------- */
const GRID = 16;
const SPACING = 0.62;
const LOW = new THREE.Color("#0b6e7f");
const MID = new THREE.Color("#10e3a0");
const HIGH = new THREE.Color("#ffc94a");

function MarketSurface({ scroll }: { scroll: MotionValue<number> }) {
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const group = useRef<THREE.Group>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const color = useMemo(() => new THREE.Color(), []);
  const amp = useRef(1);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime * speed;
    const p = scroll.get();
    amp.current = damp(amp.current, p < 0.12 ? 1 : 0.7, 2, dt);
    let i = 0;
    const half = (GRID - 1) / 2;
    for (let x = 0; x < GRID; x++) {
      for (let z = 0; z < GRID; z++) {
        const px = (x - half) * SPACING;
        const pz = (z - half) * SPACING;
        const d = Math.hypot(px, pz);
        const wave =
          Math.sin(px * 0.8 + t * 0.9) * 0.5 +
          Math.cos(pz * 0.7 + t * 0.7) * 0.5 +
          Math.sin(d * 1.1 - t * 1.6) * 0.6;
        const h = Math.max(0.08, (1.1 + wave) * 0.55 * amp.current);
        dummy.position.set(px, h / 2, pz);
        dummy.scale.set(0.46, h, 0.46);
        dummy.updateMatrix();
        mesh.current.setMatrixAt(i, dummy.matrix);
        const k = Math.min(1, h / 2.1);
        if (k < 0.5) color.copy(LOW).lerp(MID, k * 2);
        else color.copy(MID).lerp(HIGH, (k - 0.5) * 2);
        mesh.current.setColorAt(i, color);
        i++;
      }
    }
    mesh.current.instanceMatrix.needsUpdate = true;
    if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;

    group.current.rotation.y = t * 0.06 + mouse.x * 0.25 + p * 3.2;
    group.current.rotation.x = damp(group.current.rotation.x, mouse.y * 0.06, 3, dt);
    group.current.position.y = lerp(-3.5, -4.1, Math.min(1, p * 4));
  });

  return (
    <group ref={group} position={[0, -3.5, -4.5]}>
      <instancedMesh ref={mesh} args={[undefined, undefined, GRID * GRID]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial metalness={0.35} roughness={0.3} transparent opacity={0.92} />
      </instancedMesh>
    </group>
  );
}

/* ---------- Hero centerpiece: distorted core, wire shell, orbiting rings & coins ---------- */
function Core({ scroll }: { scroll: MotionValue<number> }) {
  const root = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Mesh>(null!);
  const shell = useRef<THREE.Mesh>(null!);
  const rings = useRef<THREE.Group>(null!);
  const coins = useRef<THREE.Group>(null!);
  const { viewport, size } = useThree();
  const desktop = size.width >= 900;

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime * speed;
    const p = scroll.get();
    const away = Math.min(1, Math.max(0, (p - 0.04) / 0.1)); // 0 in hero → 1 after hero
    const baseX = desktop ? viewport.width * 0.2 : 0;
    const baseY = desktop ? 0.15 : 1.9;
    const tx = lerp(baseX, desktop ? -viewport.width * 0.34 : 0, away);
    const ty = lerp(baseY, desktop ? 0.4 + Math.sin(p * 18) * 0.5 : 2.4, away);
    const ts = lerp(desktop ? 1 : 0.72, desktop ? 0.5 : 0.4, away);
    root.current.position.x = damp(root.current.position.x, tx + mouse.x * 0.35, 3, dt);
    root.current.position.y = damp(root.current.position.y, ty - mouse.y * 0.25, 3, dt);
    root.current.scale.setScalar(damp(root.current.scale.x, ts, 3, dt));
    root.current.rotation.y = t * 0.2 + p * 8;

    inner.current.rotation.x = t * 0.35;
    inner.current.rotation.z = t * 0.2;
    shell.current.rotation.x = -t * 0.25;
    shell.current.rotation.y = t * 0.3;
    rings.current.children.forEach((r, i) => {
      r.rotation.x = t * (0.4 + i * 0.18) + i * 1.2;
      r.rotation.y = t * (0.25 - i * 0.12) + i * 0.7;
    });
    coins.current.rotation.y = t * 0.55;
    coins.current.rotation.z = Math.sin(t * 0.3) * 0.25;
    coins.current.children.forEach((c, i) => {
      c.rotation.x = t * 1.6 + i;
      c.position.y = Math.sin(t * 1.2 + i * 1.7) * 0.35;
    });
  });

  return (
    <group ref={root}>
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.05, 24]} />
        <MeshDistortMaterial color="#0fd4a0" emissive="#063d3a" emissiveIntensity={0.9} distort={0.38} speed={reduced ? 0.4 : 2.2} metalness={0.85} roughness={0.18} />
      </mesh>
      <mesh ref={shell}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshBasicMaterial color="#ffc94a" wireframe transparent opacity={0.35} />
      </mesh>
      <group ref={rings}>
        {[2.0, 2.45, 2.9].map((r, i) => (
          <mesh key={r}>
            <torusGeometry args={[r, 0.012 + i * 0.004, 12, 160]} />
            <meshBasicMaterial color={i === 1 ? "#ffc94a" : "#38e8c0"} transparent opacity={0.65 - i * 0.1} />
          </mesh>
        ))}
      </group>
      <group ref={coins}>
        {Array.from({ length: 7 }).map((_, i) => {
          const a = (i / 7) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(a) * 2.45, 0, Math.sin(a) * 2.45]}>
              <cylinderGeometry args={[0.2, 0.2, 0.05, 40]} />
              <meshStandardMaterial color="#ffc94a" metalness={1} roughness={0.22} emissive="#6b4a00" emissiveIntensity={0.6} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

/* ---------- Star / data particles ---------- */
function Particles({ scroll }: { scroll: MotionValue<number> }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const n = 2200;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 6 + Math.random() * 16;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(ph) * Math.cos(th);
      arr[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.7;
      arr[i * 3 + 2] = r * Math.cos(ph);
    }
    return arr;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    ref.current.rotation.y = t * 0.02 + scroll.get() * 2.2;
    ref.current.rotation.x = Math.sin(t * 0.05) * 0.1 + mouse.y * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#7df3d4" size={0.045} sizeAttenuation transparent opacity={0.75} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

/* ---------- Camera path driven by scroll ---------- */
function Rig({ scroll }: { scroll: MotionValue<number> }) {
  const look = useMemo(() => new THREE.Vector3(), []);
  useFrame((state, dt) => {
    const p = scroll.get();
    const cam = state.camera;
    const tx = Math.sin(p * Math.PI * 2) * 1.8 + mouse.x * 0.7;
    const ty = 0.9 - p * 2.4 - mouse.y * 0.45;
    const tz = 9.4 + Math.sin(p * Math.PI) * 1.8;
    cam.position.x = damp(cam.position.x, tx, 2.5, dt);
    cam.position.y = damp(cam.position.y, ty, 2.5, dt);
    cam.position.z = damp(cam.position.z, tz, 2.5, dt);
    look.set(0, -0.4 - p * 0.8, 0);
    cam.lookAt(look);
  });
  return null;
}

function Lights() {
  const l1 = useRef<THREE.PointLight>(null!);
  useFrame((s) => {
    const t = s.clock.elapsedTime * speed;
    l1.current.position.set(Math.cos(t * 0.5) * 6, 3 + Math.sin(t * 0.4) * 1.5, Math.sin(t * 0.5) * 6);
  });
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={1.5} color="#cffff0" />
      <pointLight ref={l1} intensity={90} distance={22} color="#ffc94a" />
      <pointLight position={[-6, -1, 3]} intensity={55} distance={18} color="#14e0b0" />
    </>
  );
}

function World() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <fog attach="fog" args={["#05070d", 8, 26]} />
      <Lights />
      <Rig scroll={scrollYProgress} />
      <Particles scroll={scrollYProgress} />
      <MarketSurface scroll={scrollYProgress} />
      <Core scroll={scrollYProgress} />
    </>
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
        dpr={[1, 1.6]}
        camera={{ position: [0, 0.9, 9.4], fov: 46, near: 0.1, far: 60 }}
        gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
        style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      >
        <World />
      </Canvas>
    </Boundary>
  );
}
