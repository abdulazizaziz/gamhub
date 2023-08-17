import React from "react";
import { Dispatch } from "react";
import { GameAction, GameQuery } from "./GameReducer";

interface GameContextType {
  gameQuery: GameQuery;
  dispatch: Dispatch<GameAction>;
}

const GameQueryContext = React.createContext<GameContextType>(
  {} as GameContextType
);

export default GameQueryContext;
