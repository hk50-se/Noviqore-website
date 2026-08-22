'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

type ProgressRef = { current: number };
const amber = '#ffad32';
const coral = '#ff5b43';
const mint = '#77e7b0';
const violet = '#8b7cff';

function CoreMachine({ progressRef }: { progressRef: ProgressRef }) {
  const root = useRef<THREE.Group>(null);
  const mark = useRef<THREE.Group>(null);
  const intelligence = useRef<THREE.Group>(null);
  useFrame(({ clock, pointer }, delta) => {
    if (!root.current || !mark.current || !intelligence.current) return;
    const t = clock.getElapsedTime();
    const p = progressRef.current;
    root.current.rotation.y += delta * (0.08 + p * 0.08);
    root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, pointer.y * 0.1, 3, delta);
    root.current.position.y = Math.sin(t * 0.58) * 0.1;
    mark.current.rotation.z = -t * 0.13;
    intelligence.current.rotation.y = t * 0.19;
    intelligence.current.scale.setScalar(0.75 + THREE.MathUtils.smoothstep(p, 0.12, 0.34) * 0.42);
  });
  return <group ref={root}>
    <mesh><icosahedronGeometry args={[1.12, 4]} /><meshPhysicalMaterial color="#17120d" emissive={amber} emissiveIntensity={0.11} metalness={0.82} roughness={0.14} clearcoat={1} /></mesh>
    <mesh scale={0.58}><icosahedronGeometry args={[1.12, 2]} /><meshPhysicalMaterial color={amber} emissive={amber} emissiveIntensity={0.5} metalness={0.25} roughness={0.1} clearcoat={1} /></mesh>
    <group ref={mark}>{[0, 1, 2].map((ring) => <mesh key={ring} rotation={[0.55 + ring * 0.62, ring * 0.72, ring * 0.48]}><torusGeometry args={[1.7 + ring * 0.34, 0.025 + ring * 0.006, 8, 128]} /><meshStandardMaterial color={ring === 1 ? coral : amber} emissive={ring === 1 ? coral : amber} emissiveIntensity={0.4} metalness={0.74} roughness={0.16} /></mesh>)}</group>
    <group ref={intelligence}>{Array.from({ length: 12 }, (_, index) => { const angle = (index / 12) * Math.PI * 2; return <mesh key={index} position={[Math.cos(angle) * 2.55, Math.sin(angle * 2) * 0.62, Math.sin(angle) * 1.05]}><sphereGeometry args={[index % 4 === 0 ? 0.11 : 0.055, 14, 14]} /><meshStandardMaterial color={index % 3 === 0 ? mint : '#fff0d3'} emissive={index % 3 === 0 ? mint : amber} emissiveIntensity={0.45} /></mesh>; })}</group>
    <pointLight color={amber} intensity={26} distance={9} />
  </group>;
}

function SignalField() {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const points = useMemo(() => Array.from({ length: 140 }, (_, index) => ({ x: (Math.sin(index * 19.13) * 0.5 + 0.5) * 20 - 10, y: (Math.sin(index * 7.91) * 0.5 + 0.5) * 9 - 4.5, z: (Math.sin(index * 3.17) * 0.5 + 0.5) * 13 - 8, size: 0.018 + (index % 6) * 0.006 })), []);
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    points.forEach((point, index) => { dummy.position.set(point.x, point.y + Math.sin(t * 0.42 + index) * 0.1, point.z); dummy.scale.setScalar(point.size * (1 + Math.sin(t * 1.6 + index) * 0.24)); dummy.updateMatrix(); mesh.current?.setMatrixAt(index, dummy.matrix); });
    mesh.current.instanceMatrix.needsUpdate = true;
  });
  return <instancedMesh ref={mesh} args={[undefined, undefined, points.length]}><sphereGeometry args={[1, 6, 6]} /><meshBasicMaterial color="#ffd996" transparent opacity={0.55} /></instancedMesh>;
}

function ProductCity({ progressRef }: { progressRef: ProgressRef }) {
  const group = useRef<THREE.Group>(null);
  const towers = useMemo(() => Array.from({ length: 15 }, (_, index) => ({ x: (index % 5) * 0.9 - 1.8, z: Math.floor(index / 5) * 0.95 - 1, height: 0.45 + ((index * 7) % 6) * 0.24, color: [amber, coral, mint, violet][index % 4] })), []);
  useFrame(({ clock }, delta) => {
    if (!group.current) return;
    const reveal = THREE.MathUtils.smoothstep(progressRef.current, 0.43, 0.64);
    group.current.scale.y = THREE.MathUtils.damp(group.current.scale.y, 0.04 + reveal * 0.96, 4, delta);
    group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.22) * 0.14;
  });
  return <group ref={group} position={[0, -2.3, -2.6]}>{towers.map((tower, index) => <group key={index} position={[tower.x, tower.height / 2, tower.z]}><mesh><boxGeometry args={[0.58, tower.height, 0.58]} /><meshPhysicalMaterial color="#131513" emissive={tower.color} emissiveIntensity={0.08} metalness={0.7} roughness={0.22} clearcoat={1} /></mesh><mesh position={[0, tower.height / 2 + 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[0.45, 0.45]} /><meshBasicMaterial color={tower.color} transparent opacity={0.7} /></mesh></group>)}</group>;
}

function LaunchGate({ progressRef }: { progressRef: ProgressRef }) {
  const gate = useRef<THREE.Group>(null);
  useFrame(({ clock }, delta) => { if (!gate.current) return; const reveal = THREE.MathUtils.smoothstep(progressRef.current, 0.78, 0.94); gate.current.scale.setScalar(THREE.MathUtils.damp(gate.current.scale.x, 0.08 + reveal * 0.92, 3.5, delta)); gate.current.rotation.z = clock.getElapsedTime() * 0.08; });
  return <group ref={gate} position={[4.8, 0.1, -4]}>{[0, 1, 2, 3].map((ring) => <mesh key={ring} rotation={[0, Math.PI / 2, ring * 0.4]}><torusGeometry args={[1.25 + ring * 0.26, 0.035, 8, 100]} /><meshStandardMaterial color={ring % 2 ? coral : amber} emissive={ring % 2 ? coral : amber} emissiveIntensity={0.55} metalness={0.72} roughness={0.14} /></mesh>)}<pointLight color={coral} intensity={20} distance={8} /></group>;
}

function World({ progressRef }: { progressRef: ProgressRef }) {
  const world = useRef<THREE.Group>(null);
  const target = useMemo(() => new THREE.Vector3(), []);
  useFrame(({ camera, pointer }, delta) => {
    if (!world.current) return;
    const p = progressRef.current;
    const finalEase = THREE.MathUtils.smoothstep(p, 0.84, 0.96);
    const travel = p < 0.84 ? p : 0.84 + finalEase * 0.08;
    const angle = -0.55 + travel * Math.PI * 1.58;
    const radius = 8.8 - Math.sin(travel * Math.PI) * 1.8;
    const pointerStrength = 1 - finalEase * 0.7;
    camera.position.x = THREE.MathUtils.damp(camera.position.x, Math.sin(angle) * radius + pointer.x * 0.52 * pointerStrength, 3, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, 1.1 + Math.sin(travel * Math.PI * 2.2) * 1.3 + pointer.y * 0.32 * pointerStrength, 3, delta);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, Math.cos(angle) * radius + 1.1, 3, delta);
    const cityFocus = THREE.MathUtils.smoothstep(p, 0.43, 0.56) * (1 - THREE.MathUtils.smoothstep(p, 0.68, 0.78));
    target.set(cityFocus * 0.8 + finalEase * 3.2, -cityFocus * 0.8, -cityFocus * 2.2 - finalEase * 2.8);
    camera.lookAt(target);
    world.current.rotation.y = THREE.MathUtils.damp(world.current.rotation.y, pointer.x * 0.035, 3, delta);
  });
  return <group ref={world}><CoreMachine progressRef={progressRef} /><SignalField /><ProductCity progressRef={progressRef} /><LaunchGate progressRef={progressRef} /><gridHelper args={[34, 48, '#49311f', '#1c1814']} position={[0, -3.15, -3]} /><mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.2, -3]}><planeGeometry args={[35, 35]} /><meshStandardMaterial color="#090806" roughness={0.95} metalness={0.05} /></mesh></group>;
}

export default function QoreWorldCanvas({ progressRef }: { progressRef: ProgressRef }) {
  return <div className="qore-world-canvas" aria-hidden="true"><Canvas dpr={[1, 1.45]} camera={{ position: [-4.2, 1.2, 8.4], fov: 44 }} gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}><color attach="background" args={['#090806']} /><fog attach="fog" args={['#090806', 8, 21]} /><Suspense fallback={null}><ambientLight intensity={0.58} /><directionalLight position={[5, 7, 5]} intensity={2.8} color="#fff0d5" /><pointLight position={[-5, 2, 3]} intensity={12} distance={14} color={violet} /><World progressRef={progressRef} /></Suspense></Canvas></div>;
}
