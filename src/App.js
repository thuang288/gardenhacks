import React, { Suspense } from "react";
import "./App.css";
// import { Canvas } from "@react-three/fiber";
// import { Html, useGLTF } from "@react-three/drei";
import Globe from 'react-globe.gl';

// const Model = () => {
//   const gltf = useGLTF("/earth.gltf", true);
//   return <primitive object={gltf.scene} dispose={null} />;
// };

// const HTMLContent = () => {
//   return (
//     <group position={[0, 250, 0]}>
//       <Html fullscreen>
//         <mesh position={[0,35,0]}>
//           <Model />
//         </mesh>
//       </Html>
//     </group>
//   );
// };

  const Earth = () => {
    return (
      <>
      <Globe 
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" 
      />
      </>
    )
  }

function App() {
  return (
    <>
      {/* <header className="App-header">
      </header> */}
      {/* <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 50 }}>
        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
      </Canvas> */}
      <Earth/>
    </>
  );
}

export default App;
