import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  TrendingCoinsInterface,
  AllNewsInterface,
} from "./interfaces/interface";
import { CoinList, PopularNews } from "./API/AllAPI";

import { useState, useEffect } from "react";

import axios from "axios";

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
  const [coins, setCoins] = useState<TrendingCoinsInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [news, setNews] = useState<AllNewsInterface[]>([]);
  useEffect(() => {
    console.log("api sended");

    setIsLoading(true);
    const res = async () => {
      const response = await axios.get(CoinList("USD"));
      setIsLoading(false);
      setCoins(response.data);
      console.log(response.data);
    };
    res();
  }, []);
  useEffect(() => {
    console.log("news api sended");

    const res = async () => {
      const response = await axios.get(PopularNews(), {
        headers: {
          "X-RapidAPI-Key": `${process.env.REACT_APP_NEWS_API_KEY}`,
          "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
        },
      });
      setNews(response.data);
    };
    res();
  }, []);

  return (
    <coinsContext.Provider
      value={{
        isLoading,
        coins,
        news,
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
