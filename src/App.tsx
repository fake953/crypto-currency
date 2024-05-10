import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { TrendingCoinsInterface } from "./interfaces/interface";

import { useState } from "react";

import { coinsContext } from "./context/coinsContext";
import "./app.css";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/ruterObject";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const App = () => {
  const [coins, setCoins] = useState<TrendingCoinsInterface[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setTrendingCoinsType = (value: TrendingCoinsInterface[]) => {
    setCoins(value);
  };
  const setIsLoadingType = (value: boolean) => {
    setIsLoading(value);
  };

  return (
    <coinsContext.Provider
      value={{
        TrendingCoinsType: coins,
        setTrendingCoinsType: setTrendingCoinsType,
        isLoadingType: isLoading,
        setIsLoadingType: setIsLoadingType,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <NavBar />
          <RouterProvider router={router} />
        </CssBaseline>
      </ThemeProvider>
    </coinsContext.Provider>
  );
};

export default App;
