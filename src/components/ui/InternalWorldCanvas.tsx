'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

export type InternalWorldVariant = 'profile' | 'services' | 'ai' | 'products' | 'process' | 'proof' | 'tech' | 'contact' | 'blog';

const palettes: Record<InternalWorldVariant, [string, string, string]> = {
  profile: ['#ffad32', '#ff5b43', '#fff0d3'], services: ['#77e7b0', '#ffad32', '#f7efe4'], ai: ['#8b7cff', '#77e7b0', '#fff0d3'], products: ['#ff5b43', '#ffad32', '#8b7cff'], process: ['#77e7b0', '#8b7cff', '#ffad32'], proof: ['#8b7cff', '#ff5b43', '#f7efe4'], tech: ['#77e7b0', '#ffad32', '#8b7cff'], contact: ['#ffad32', '#ff5b43', '#f7efe4'], blog: ['#ffad32', '#8b7cff', '#77e7b0']
};

function VariantModel({ variant }: { variant: InternalWorldVariant }) {
  const root = useRef<THREE.Group>(null);
  const secondary = useRef<THREE.Group>(null);
  const colors = palettes[variant];
  const nodes = useMemo(() => Array.from({ length: 12 }, (_, index) => { const angle = index / 12 * Math.PI * 2; return [Math.cos(angle) * 2.25, Math.sin(angle * 2) * .6, Math.sin(angle) * 1.2] as [number, number, number]; }), []);
  useFrame(({ clock, pointer }, delta) => {
    if (!root.current) return;
    root.current.rotation.y += delta * .12;
    root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, pointer.y * .16, 3, delta);
    root.current.position.y = Math.sin(clock.getElapsedTime() * .55) * .1;
    if (secondary.current) secondary.current.rotation.z = clock.getElapsedTime() * .1;
  });

  const material = <meshPhysicalMaterial color={colors[0]} metalness={.66} roughness={.17} clearcoat={1} emissive={colors[0]} emissiveIntensity={.07} />;

  return <group ref={root}>
    {variant === 'profile' && <><group ref={secondary}>{Array.from({ length: 11 }, (_, i) => <mesh key={i} position={[0,(i-5)*.3,0]} rotation={[Math.PI/2,0,i*.08]}><torusGeometry args={[.7 + Math.sin(i/10*Math.PI)*.85,.028,8,72]} /><meshStandardMaterial color={i%2 ? colors[0] : colors[1]} metalness={.72} roughness={.14} /></mesh>)}</group><mesh><octahedronGeometry args={[.48,2]} />{material}</mesh></>}
    {variant === 'services' && <><mesh><dodecahedronGeometry args={[1.05,1]} />{material}</mesh><group ref={secondary}>{nodes.slice(0,8).map((p,i)=><mesh key={i} position={p}><octahedronGeometry args={[.16,0]} /><meshStandardMaterial color={i%2?colors[1]:colors[2]} emissive={colors[0]} emissiveIntensity={.2}/></mesh>)}</group></>}
    {variant === 'ai' && <><mesh><torusKnotGeometry args={[1,.28,120,14,2,3]} />{material}</mesh><group ref={secondary}>{nodes.map((p,i)=><mesh key={i} position={p}><sphereGeometry args={[i%4===0?.1:.045,12,12]} /><meshBasicMaterial color={i%3===0?colors[1]:colors[2]}/></mesh>)}</group></>}
    {variant === 'products' && <group ref={secondary}>{Array.from({length:12},(_,i)=><mesh key={i} position={[(i%4-1.5)*.72,(Math.floor(i/4)-1)*.72,Math.sin(i*2)*.28]}><boxGeometry args={[.52,.52,.52]} /><meshPhysicalMaterial color={i%3===0?colors[1]:colors[0]} metalness={.72} roughness={.18} clearcoat={1}/></mesh>)}</group>}
    {variant === 'process' && <group ref={secondary} rotation={[0,Math.PI/2,0]}>{Array.from({length:8},(_,i)=><mesh key={i} position={[0,0,(i-3.5)*.48]}><torusGeometry args={[.65+i*.1,.035,8,80]} /><meshStandardMaterial color={[colors[0],colors[1],colors[2]][i%3]} emissive={colors[i%2]} emissiveIntensity={.18} metalness={.7}/></mesh>)}</group>}
    {variant === 'proof' && <group ref={secondary}>{[-1,0,1].map((x,i)=><group key={x} position={[x*1.05,0,(i-1)*.25]}><mesh><boxGeometry args={[.74,2.15,.15]} /><meshPhysicalMaterial color="#171411" metalness={.55} roughness={.2} clearcoat={1}/></mesh>{[.62,.15,-.32,-.72].map((y,j)=><mesh key={y} position={[0,y,.1]}><boxGeometry args={[.48,j===0?.08:.035,.03]}/><meshBasicMaterial color={j===0?colors[i]:colors[2]} /></mesh>)}</group>)}</group>}
    {variant === 'tech' && <><mesh rotation={[Math.PI/2,0,0]}><boxGeometry args={[3.2,.16,2.5]} /><meshPhysicalMaterial color="#121713" metalness={.8} roughness={.22}/></mesh><group ref={secondary}>{Array.from({length:15},(_,i)=><mesh key={i} position={[(i%5-2)*.48,(Math.floor(i/5)-1)*.04,(Math.floor(i/5)-1)*.55]}><boxGeometry args={[.25,.25,.25]} /><meshStandardMaterial color={i===7?colors[1]:colors[0]} emissive={colors[i%2]} emissiveIntensity={.18}/></mesh>)}</group></>}
    {variant === 'contact' && <><group ref={secondary}>{[0,1,2,3].map(i=><mesh key={i} rotation={[.5+i*.5,i*.4,i*.7]}><torusGeometry args={[1.1+i*.28,.035,8,100]}/><meshStandardMaterial color={i%2?colors[1]:colors[0]} emissive={i%2?colors[1]:colors[0]} emissiveIntensity={.35} metalness={.75}/></mesh>)}</group><mesh><sphereGeometry args={[.42,24,24]}/>{material}</mesh></>}
    {variant === 'blog' && <group ref={secondary}>{Array.from({length:7},(_,i)=><mesh key={i} position={[(i-3)*.45,Math.sin(i)*.5,(i%2)*.35]} rotation={[0,i*.12,(i-3)*.06]}><boxGeometry args={[.65,.92,.045]}/><meshPhysicalMaterial color={i%3===0?colors[1]:'#171411'} emissive={colors[i%3]} emissiveIntensity={.06} metalness={.5} roughness={.23}/></mesh>)}</group>}
    <pointLight position={[2,3,3]} color={colors[0]} intensity={18} distance={9}/><pointLight position={[-3,-2,2]} color={colors[1]} intensity={12} distance={8}/>
  </group>;
}

export default function InternalWorldCanvas({ variant }: { variant: InternalWorldVariant }) {
  return <div className="internal-world-canvas" aria-hidden="true"><Canvas dpr={[1,1.4]} camera={{position:[0,0,7],fov:42}} gl={{antialias:true,alpha:true,powerPreference:'high-performance'}}><ambientLight intensity={.72}/><VariantModel variant={variant}/></Canvas></div>;
}
