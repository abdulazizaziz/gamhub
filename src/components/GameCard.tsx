import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { getCroppedImageUrl } from "../services/image-url";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }: { game: Game }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <Card
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s linear",
      }}
      borderRadius="10px"
      overflow="hidden"
      width="100%"
    >
      <Image
        className={!isImageLoaded ? "d-none" : ""}
        onLoad={() => setImageLoaded(true)}
        src={getCroppedImageUrl(game.background_image)}
      />
      {!isImageLoaded && <Skeleton height="250px" width="100%" />}
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
