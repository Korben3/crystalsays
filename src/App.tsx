import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Game from "./game/Game";

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas shadows camera={{ position: [0, 0, 7.5] }}>
          <Game />
        </Canvas>
      </Suspense>
      <Loader />
    </>
  );
}

export default App;
