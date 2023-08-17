import { SimpleGrid, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameQueryContext from "../providers/GameProdiver/GameContext";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import Spinner from "./Spinner";

const GameGrid = () => {
  const { gameQuery } = useContext(GameQueryContext);
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <Text>{error.message}</Text>;
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        next={() => fetchNextPage()}
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        loader={<Spinner />}
      >
        <SimpleGrid
          width={{
            base: "100%",
          }}
          padding="10px"
          columns={{
            base: 1,
            md: 2,
            lg: 3,
            xl: 4,
          }}
          spacing={3}
        >
          {isLoading &&
            skeletons.map((item) => (
              <GameCardContainer key={item}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}

          {!isLoading &&
            data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page?.results.map((item) => (
                  <GameCardContainer key={item.id}>
                    <GameCard game={item} />
                  </GameCardContainer>
                ))}
              </React.Fragment>
            ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
