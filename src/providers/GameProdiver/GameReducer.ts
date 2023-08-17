import { SortOrder } from "../../hooks/useGames";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: SortOrder | null;
  search?: string | null;
}

interface GenreGameAction {
  type: "CHANGE_GENRE";
  genreId: number;
}
interface PlatformGameAction {
  type: "CHANGE_PLATFORM";
  platformId: number;
}
interface SortOrderGameAction {
  type: "CHANGE_SORT_ORDER";
  sortOrder: SortOrder | null;
}
interface SearchGameAction {
  type: "CHANGE_SEARCH";
  search: string | null;
}

export type GameAction =
  | GenreGameAction
  | PlatformGameAction
  | SortOrderGameAction
  | SearchGameAction;

const gameReducer = (game: GameQuery, action: GameAction): GameQuery => {
  switch (action.type) {
    case "CHANGE_GENRE":
      return { ...game, genreId: action.genreId };
    case "CHANGE_PLATFORM":
      return { ...game, platformId: action.platformId };
    case "CHANGE_SORT_ORDER":
      return { ...game, sortOrder: action.sortOrder };
    case "CHANGE_SEARCH":
      return { search: action.search };
    default:
      return game;
  }
};

export default gameReducer;
