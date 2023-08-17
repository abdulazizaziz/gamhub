import { Grid, GridItem } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import GameProvider from "./providers/GameProdiver";
import router from "./routing/routes";

function App() {
  return (
    <GameProvider>
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
        <RouterProvider router={router} />
      </Grid>
    </GameProvider>
  );
}

export default App;
