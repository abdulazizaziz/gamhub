import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import { GameQuery } from "../providers/GameProdiver/GameReducer";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  slug: string;
  description: string;
  description_raw: string;
}

export interface SortOrder {
  value: string;
  label: string;
}

const useGames = (gameQuery: GameQuery) =>
  // useData<Game>({
  //   key: ["games", gameQuery],
  //   endpoint: `/games`,
  //   params: {
  //     genres: gameQuery.genre?.id,
  //     platforms: gameQuery.platform?.id,
  //     ordering: gameQuery.sortOrder?.value,
  //     search: gameQuery.search,
  //   },
  // });
  {
    const apiClient = new ApiClient<FetchResponse<Game>>("/games", {
      genres: gameQuery.genreId,
      platforms: gameQuery.platformId,
      ordering: gameQuery.sortOrder?.value,
      search: gameQuery.search,
    });
    return useInfiniteQuery<FetchResponse<Game>, Error>({
      queryKey: ["games", gameQuery],
      queryFn: ({ pageParam = 1 }) => {
        apiClient.params.page = pageParam;
        return apiClient.getAll();
      },
      staleTime: 24 * 60 * 60 * 1000, // 24 hours
      // keepPreviousData: true,
      getNextPageParam: (lastPage, allPages) => {
        // console.log(lastPage, allPages);
        // let key = "page=";
        // let index = lastPage.next?.indexOf(key);
        // if (index) {
        //   let lastIndex = lastPage.next?.indexOf("&", index + key.length);
        //   if (lastIndex)
        //     return lastPage.next?.slice(index + key.length, lastIndex);
        //   return lastPage.next?.slice(index + key.length);
        // } else return undefined;
        return lastPage.next ? allPages.length + 1 : undefined;
      },
    });
  };

export default useGames;
