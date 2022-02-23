import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Html, useProgress } from "@react-three/drei"
import House from "./models/House"

function Plane() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  )
}

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <spotLight
            intensity={0.5}
            position={[10, 15, 10]}
            angle={0.3}
            castShadow
          />
          <Plane receiveShadow />
          <House />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App;
