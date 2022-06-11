import { Float, Text } from "@react-three/drei";

import DarkCrystalFont from "../assets/dc_s.ttf";

type Props = {
  startGame: () => void;
};

const GameInfo = ({ startGame }: Props) => {
  return (
    <>
      <Text font={DarkCrystalFont} position={[0, 3, 2]} fontSize={1.8} color="#AAAA44">
        CrystalSays
      </Text>
      <Text font={DarkCrystalFont} position={[0, -1.6, 2]} fontSize={0.3} color="#AAAA44">
        Press start, memorize and repeat the pattern of the crystals
      </Text>
      <Float floatingRange={[-0.05, 0.05]} floatIntensity={0.5} speed={0.5}>
        <Text font={DarkCrystalFont} position={[0, 1.5, 2]} fontSize={0.8} color="#44AAAA" onClick={startGame}>
          Start
        </Text>
      </Float>
    </>
  );
};

export default GameInfo;
