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

const GameCard = ({ game }: { game: Game }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <Card borderRadius="10px" overflow="hidden" width="100%">
      <Image
        className={!isImageLoaded ? "d-none" : ""}
        onLoad={() => setTimeout(() => setImageLoaded(true), 200)}
        src={getCroppedImageUrl(game.background_image)}
      />
      {!isImageLoaded && <Skeleton height="250px" width="100%" />}
      <CardBody>
        <HStack justifyContent="space-between " marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
