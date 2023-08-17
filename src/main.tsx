import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import theme from "./themes";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";
import GameProvider from "./providers/GameProdiver";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {/* <App /> */}
        <GameProvider>
          <RouterProvider router={router} />
        </GameProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
