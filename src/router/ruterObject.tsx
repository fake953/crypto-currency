import ChosenCoin from "../pages/ChosenCoin";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "coins/:coinId",
    element: <ChosenCoin />,
  },
]);
