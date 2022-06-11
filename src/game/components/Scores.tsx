import { Text } from "@react-three/drei";

import DarkCrystalFont from "../assets/dc_s.ttf";

type Props = {
  score: number;
  highscore: number;
  playingTune: boolean;
};

const Scores = ({ score, highscore, playingTune }: Props) => {
  return (
    <>
      <Text font={DarkCrystalFont} position={[0, 3.4, 2]} fontSize={0.4} color="#AAAA44">
        Score {score}
      </Text>
      <Text font={DarkCrystalFont} position={[0, 2.9, 2]} fontSize={0.4} color="#888844">
        Highscore {highscore}
      </Text>
      <Text font={DarkCrystalFont} position={[0, 2.4, 2]} fontSize={0.4} color="#44AAAA">
        {playingTune ? "Watch & Listen" : "Repeat"}
      </Text>
    </>
  );
};

export default Scores;
