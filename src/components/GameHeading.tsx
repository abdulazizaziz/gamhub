import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import { useContext } from "react";
import GameQueryContext from "../providers/GameProdiver/GameContext";

const GameHeading = () => {
  const { gameQuery } = useContext(GameQueryContext);
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
