import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Html, useProgress, Environment } from "@react-three/drei"
import House from "./models/House"
import Tree from "./models/Tree"
import Bench from "./models/Bench"

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
      <Canvas frameloop="demand" shadowMap colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <Environment background={true} preset={"sunset"} />
          <directionalLight
            castShadow
            position={[2.5, 8, 5]}
            intensity={1}
          />
          <Plane rotation-x={-Math.PI / 2} position={[0, -0.5, 0]} args={[10, 10, 4, 4]}>
            <meshBasicMaterial attach="material" opacity={0.5} />
          </Plane>
          <House receiveShadow castShadow />
          <Tree position={[7, 0, 0]} scale={[2, 2, 2]} receiveShadow castShadow />
          <Bench position={[6, 0, 2]} receiveShadow castShadow />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App;
