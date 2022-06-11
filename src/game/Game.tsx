import { useEffect, useState } from "react";
import Scores from "./components/Scores";
import GameInfo from "./components/GameInfo";
import Lighting from "./components/Lighting";
import Crystals1blue from "./objects/Crystals1blue";
import Crystals2green from "./objects/Crystals2green";
import Crystals3red from "./objects/Crystals3red";
import Ground from "./objects/Ground";
import Rocks from "./objects/Rocks";
import toneDunn from "./assets/tone-dunn.mp3";
import useSound from "use-sound";
import Chance from "chance";

const Game = () => {
  const [gamePlaying, setGamePlaying] = useState<boolean>(false);
  const [currentMove, setCurrentMove] = useState<number>();
  const [moveTracker, setMoveTracker] = useState<number>(0);
  const [moveTrackerPlayer, setMoveTrackerPlayer] = useState<number>(0);
  const [highScore, setHighscore] = useState<number>(0);
  const [playingTune, setPlayingTune] = useState<boolean>(false);
  const [moves, setMoves] = useState<number[]>([2]);
  const [play] = useSound(toneDunn);
  const chance = new Chance();

  const startGame = () => {
    console.log("start game");
    setGamePlaying(true);
    setMoveTracker(0);
    setPlayingTune(true);
  };

  const addMove = () => {
    setMoves([...moves, chance.integer({ min: 1, max: 3 })]);
    setMoveTracker(0);
    setMoveTrackerPlayer(0);
    setPlayingTune(true);
  };

  useEffect(() => {
    if (gamePlaying) {
      const delay = () => {
        setMoveTracker(moveTracker + 1);
      };

      const nextMove = () => {
        setCurrentMove(0);
        setTimeout(delay, 100);
      };

      setCurrentMove(moves[moveTracker]);
      if (moveTracker < moves.length) {
        setTimeout(nextMove, 1200);
      } else {
        setPlayingTune(false);
      }
    }
  }, [moves, moveTracker, gamePlaying]);

  const crystalClicked = (crystal: number) => {
    if (!playingTune && gamePlaying) {
      console.log(`I can click ${crystal}`);
      setCurrentMove(crystal);
      setTimeout(() => setCurrentMove(0), 1200);
      if (crystal === moves[moveTrackerPlayer]) {
        // player clicked correct crystal

        if (moveTrackerPlayer + 1 === moves.length) {
          setTimeout(addMove, 1200);
        } else {
          setMoveTrackerPlayer(moveTrackerPlayer + 1);
        }
      } else {
        // player clicked incorrect crystal
        setTimeout(resetGame, 1000);
      }
    }
  };

  const resetGame = () => {
    play();
    moves.length - 1 > highScore && setHighscore(moves.length);
    setGamePlaying(false);
    setMoves([2]);
    setMoveTracker(0);
    setMoveTrackerPlayer(0);
  };

  return (
    <>
      <Lighting />
      <color attach="background" args={["#111133"]} />
      <Ground />
      <Rocks />

      <Crystals1blue
        position={[-8, -2, 0.5]}
        scale={0.6}
        selected={currentMove === 1 ? true : false}
        onClick={() => crystalClicked(1)}
      />
      <Crystals2green
        position={[-2, -2, 0]}
        scale={0.6}
        selected={currentMove === 2 ? true : false}
        onClick={() => crystalClicked(2)}
      />
      <Crystals3red
        position={[6, -2, 0]}
        scale={0.6}
        selected={currentMove === 3 ? true : false}
        onClick={() => crystalClicked(3)}
      />

      {!gamePlaying && <GameInfo startGame={startGame} />}
      {gamePlaying && <Scores score={moves.length - 1} highscore={highScore} playingTune={playingTune} />}
    </>
  );
};

export default Game;
