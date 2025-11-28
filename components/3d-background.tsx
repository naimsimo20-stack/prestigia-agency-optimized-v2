"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Icosahedron } from "@react-three/drei"
import { useRef } from "react"

function RotatingGeometry() {
  const meshRef = useRef(null)

  return (
    <Icosahedron ref={meshRef} args={[1, 4]} position={[0, 0, 0]} rotation={[0.3, 0.3, 0]}>
      <meshStandardMaterial color="#9d4edd" wireframe emissive="#6d28d9" emissiveIntensity={0.3} />
    </Icosahedron>
  )
}

export default function Background3D() {
  return (
    <Canvas style={{ position: "absolute", inset: 0 }} camera={{ position: [0, 0, 2.5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingGeometry />
      <OrbitControls autoRotate enableZoom={false} autoRotateSpeed={2} />
    </Canvas>
  )
}
