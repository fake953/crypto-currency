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
  const [currency, setCurrency] = useState<string>("USD");
  const [coins, setCoins] = useState<TrendingCoinsInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [news, setNews] = useState<AllNewsInterface[]>([]);
  useEffect(() => {
    setIsLoading(true);
    const res = async () => {
      try {
        const { data } = await axios.get(CoinList(currency));
        setIsLoading(false);
        setCoins(data);
      } catch (error) {
        console.log(error);
      }
    };
    res();
  }, [currency]);
  useEffect(() => {
    const res = async () => {
      try {
        const { data } = await axios.get(PopularNews(), {
          headers: {
            "X-RapidAPI-Key": `90036e5006msh9c507143836a26bp115d86jsn545e41f4f9e8`,
            "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
          },
        });
        setNews(data);
      } catch (error) {
        console.log(error);
      }
    };
    res();
  }, []);

  return (
    <coinsContext.Provider
      value={{
        isLoading,
        coins,
        news,
        currency,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <NavBar setCurrency={setCurrency} />
          <RouterProvider router={router} />
        </CssBaseline>
      </ThemeProvider>
    </coinsContext.Provider>
  );
};

export default App;
