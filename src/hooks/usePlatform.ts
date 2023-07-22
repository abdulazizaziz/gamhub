import platforms from "../data/platforms";
import useData from "./useData";
import { Platform } from "./useGames";

// const usePlatform = () => useData<Platform>("/platforms");
const usePlatform = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatform;
