import { ReactNode, useReducer } from "react";
import GameContext from "./GameContext";
import gameReducer, { GameQuery } from "./GameReducer";

interface Props {
  children: ReactNode;
}

const GameProvider = ({ children }: Props) => {
  const [gameQuery, dispatch] = useReducer(gameReducer, {} as GameQuery);
  return (
    <GameContext.Provider value={{ gameQuery, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
