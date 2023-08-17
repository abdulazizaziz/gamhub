import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading } from "@chakra-ui/react";
import Spinner from "../components/Spinner";

const GameDetail = () => {
  const { slug } = useParams<{ slug: any }>();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <Box paddingX={10}>
      <Heading>{game.name}</Heading>
      <p>{game.description_raw}</p>
    </Box>
  );
};

export default GameDetail;
