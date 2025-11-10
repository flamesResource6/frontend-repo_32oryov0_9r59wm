import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Float, Trail } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/cannon'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function SpinningBox({ color = '#8b5cf6', position = [0, 1, 0] }) {
  const ref = useRef()
  const [active, setActive] = useState(false)
  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.6
    ref.current.rotation.y += delta * 0.8
  })
  return (
    <RigidBody restitution={0.6} friction={0.2}>
      <mesh ref={ref} position={position} onClick={() => setActive(!active)} scale={active ? 1.3 : 1} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} metalness={0.4} roughness={0.2} />
      </mesh>
    </RigidBody>
  )
}

function BouncySpheres() {
  const colors = ['#22d3ee', '#a78bfa', '#fb7185', '#34d399']
  return (
    <group>
      {new Array(10).fill(0).map((_, i) => (
        <RigidBody key={i} restitution={0.9} friction={0.1} position={[Math.random()*4-2, 2 + i*0.3, Math.random()*4-2]}>
          <Float speed={1.2} floatIntensity={1.2}>
            <mesh castShadow>
              <sphereGeometry args={[0.25, 32, 32]} />
              <meshStandardMaterial color={colors[i % colors.length]} emissiveIntensity={0.2} />
            </mesh>
          </Float>
        </RigidBody>
      ))}
    </group>
  )
}

function Floor() {
  return (
    <RigidBody type="fixed" restitution={0.6} friction={0.9}>
      <mesh receiveShadow rotation={[-Math.PI/2,0,0]} position={[0,-1,0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#0f1220" />
      </mesh>
    </RigidBody>
  )
}

export default function InteractiveDemo() {
  return (
    <section className="relative bg-[#0b0d14] text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-5xl font-bold">
          Interactive 3D Demo
        </motion.h2>
        <p className="mt-3 text-gray-300 max-w-2xl">Rotate, drag, and zoom the scene. Objects float with physics, bounce, and leave subtle trails.</p>
      </div>

      <div className="mt-10 mx-auto max-w-6xl px-6">
        <div className="h-[520px] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/[0.04] p-[1px]">
          <div className="h-full w-full rounded-2xl bg-[#0b0d14]">
            <Canvas shadows camera={{ position: [4, 4, 6], fov: 55 }}>
              <color attach="background" args={["#0b0d14"]} />
              <ambientLight intensity={0.4} />
              <directionalLight position={[5,5,5]} intensity={1.2} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
              <Suspense fallback={null}>
                <Physics gravity={[0, -9.81, 0]}>
                  <Floor />
                  <SpinningBox position={[0, 1.2, 0]} />
                  <SpinningBox color="#06b6d4" position={[2, 1.8, 0]} />
                  <BouncySpheres />
                </Physics>
                <Trail width={4} color={new THREE.Color('#a78bfa')} length={20} decay={0.3}>
                  <mesh position={[0, 2, 0]}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshBasicMaterial color="#a78bfa" />
                  </mesh>
                </Trail>
                <Stars radius={80} depth={40} count={5000} factor={4} fade speed={1} />
              </Suspense>
              <OrbitControls enableDamping makeDefault />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}
