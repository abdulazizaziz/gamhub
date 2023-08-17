import genres from "../data/genres";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useData<Genre>({
    key: ["genres"],
    endpoint: `/genres`,
    queryExtra: {
      staleTime: 24 * 60 * 60 * 1000, // 24 hours,
      initialData: { count: genres.length, results: genres, next: null },
    },
  });
export default useGenres;
