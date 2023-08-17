import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "./HomePage";
import GameDetail from "./GameDetail";
import ErrorPage from "./ErrorPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "games", element: <HomePage /> },
      { path: "games/:slug", element: <GameDetail /> },
    ],
  },
]);

export default router;
