import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "300px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={9}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spacing={5} className="px-2 pb-1">
            <GameHeading />
          </HStack>
          <HStack spacing={5} className="px-2 pb-3" marginY="10px">
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
