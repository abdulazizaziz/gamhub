import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Game } from "./useGames";

const useGame = (slug: string) => {
  const apiClient = new ApiClient<Game>(`/games/${slug}`);
  return useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};
export default useGame;
