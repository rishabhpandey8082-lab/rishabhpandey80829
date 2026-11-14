import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const mouse = { x: 0, y: 0 };
if (typeof window !== "undefined") {
  window.addEventListener("pointermove", (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
  });
}

const HEIGHTS = [0.9, 1.25, 1.05, 1.6, 1.45, 2.0, 1.85, 2.45, 2.9];
const NAVY = "#25487f";
const BRASS = "#a07a38";
const ease = (x: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);

/** A restrained 3D growth chart: bars rise once, a brass trend line draws across them, then it drifts gently. */
function Chart() {
  const group = useRef<THREE.Group>(null!);
  const bars = useRef<(THREE.Mesh | null)[]>([]);
  const dots = useRef<(THREE.Mesh | null)[]>([]);
  const tube = useRef<THREE.Mesh>(null!);

  const spacing = 0.95;
  const xs = useMemo(() => HEIGHTS.map((_, i) => (i - (HEIGHTS.length - 1) / 2) * spacing), []);
  const curve = useMemo(() => new THREE.CatmullRomCurve3(HEIGHTS.map((h, i) => new THREE.Vector3(xs[i], h + 0.3, 0.0))), [xs]);
  const tubeGeo = useMemo(() => new THREE.TubeGeometry(curve, 160, 0.035, 10, false), [curve]);
  const total = tubeGeo.index?.count ?? 0;

  useFrame((s) => {
    const t = reduced ? 10 : s.clock.elapsedTime;
    HEIGHTS.forEach((h, i) => {
      const k = ease((t - 0.2 - i * 0.12) / 1.0);
      const m = bars.current[i];
      if (m) { m.scale.y = Math.max(0.001, h * k); m.position.y = (h * k) / 2; }
      const d = dots.current[i];
      if (d) { d.position.y = h * k + 0.3; d.scale.setScalar(k); }
    });
    tubeGeo.setDrawRange(0, Math.floor(total * ease((t - 1.0) / 1.6)));
    group.current.rotation.y = -0.55 + (reduced ? 0 : Math.sin(t * 0.25) * 0.07) + mouse.x * 0.12;
    group.current.rotation.x = 0.1 + mouse.y * 0.03;
  });

  return (
    <group ref={group} position={[0, -1.35, 0]}>
      {HEIGHTS.map((_, i) => (
        <mesh key={i} ref={(m) => (bars.current[i] = m)} position={[xs[i], 0, 0]} scale={[1, 0.001, 1]}>
          <boxGeometry args={[0.6, 1, 0.6]} />
          <meshStandardMaterial color={i === HEIGHTS.length - 1 ? BRASS : NAVY} roughness={0.5} metalness={0.05} />
        </mesh>
      ))}
      <mesh ref={tube} geometry={tubeGeo}>
        <meshStandardMaterial color={BRASS} roughness={0.35} metalness={0.4} />
      </mesh>
      {HEIGHTS.map((_, i) => (
        <mesh key={i} ref={(m) => (dots.current[i] = m)} position={[xs[i], 0.3, 0]} scale={0}>
          <sphereGeometry args={[0.09, 24, 24]} />
          <meshStandardMaterial color={BRASS} roughness={0.3} metalness={0.5} />
        </mesh>
      ))}
      <mesh position={[0, -0.06, 0]}>
        <boxGeometry args={[9.6, 0.1, 2.2]} />
        <meshStandardMaterial color="#e7e1d3" roughness={0.9} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 1.6, 9.5], fov: 34 }} gl={{ alpha: true, antialias: true }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.9} />
      <hemisphereLight args={["#ffffff", "#d9d2c1", 0.7]} />
      <directionalLight position={[4, 7, 5]} intensity={2.1} />
      <Chart />
      <ContactShadows position={[0, -1.45, 0]} opacity={0.28} scale={14} blur={2.6} far={4} />
    </Canvas>
  );
}
