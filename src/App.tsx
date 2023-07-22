import "bootstrap/dist/css/bootstrap.css";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform, SortOrder } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: SortOrder | null;
  search: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(query) => setGameQuery({ ...gameQuery, search: query })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={9}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onChange={(genre) => setGameQuery({ ...gameQuery, genre: genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} className="px-2 pb-1">
          <GameHeading gameQuery={gameQuery} />
        </HStack>
        <HStack spacing={5} className="px-2 pb-3">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(item) =>
              setGameQuery({ ...gameQuery, platform: item })
            }
          />
          <SortSelector
            selectedSortOrder={gameQuery.sortOrder}
            onSelect={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
