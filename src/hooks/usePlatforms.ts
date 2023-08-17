import platforms from "../data/platforms";
import useData from "./useData";
import { Platform } from "./useGames";

const usePlatforms = () =>
  useData<Platform>({
    key: ["platforms"],
    endpoint: `/platforms`,
    queryExtra: {
      staleTime: 24 * 60 * 60 * 1000, // 24 hours,
      initialData: { count: platforms.length, results: platforms },
    },
  });

export default usePlatforms;
