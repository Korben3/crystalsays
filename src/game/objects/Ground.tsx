import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader"; // replace with drei?

const Ground = () => {
  const [colorMap, normalMap] = useLoader(TextureLoader, [
    "assets/textures/1K_mud_ground_basecolor.png",
    "assets/textures/1K_mud_ground_normal.jpg",
  ]);
  const wrapSvalue = 20;
  const wrapTvalue = 20;
  colorMap.wrapS = THREE.RepeatWrapping;
  colorMap.wrapT = THREE.RepeatWrapping;
  colorMap.repeat.set(wrapSvalue, wrapTvalue);
  normalMap.wrapS = THREE.RepeatWrapping;
  normalMap.wrapT = THREE.RepeatWrapping;
  normalMap.repeat.set(wrapSvalue, wrapTvalue);

  return (
    <>
      <mesh position={[0, -2, 0]} rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
        <planeGeometry args={[500, 500, 16, 16]} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
      </mesh>
    </>
  );
};

export default Ground;
