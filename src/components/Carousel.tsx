import axios from "axios";
import { useState, useEffect } from "react";
import { TrendingCoins } from "../API/AllAPI";
import { TrendingCoinsType } from "../interfaces/interface";
import { Box, Typography } from "@mui/material";
import AliceCarousel from "react-alice-carousel";

const Carousel = () => {
  const [coins, setCoins] = useState<TrendingCoinsType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const res = async () => {
      const response = await axios.get(TrendingCoins(), {
        headers: {
          "X-RapidAPI-Key":
            "90036e5006msh9c507143836a26bp115d86jsn545e41f4f9e8",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      });
      setCoins(response.data.data.coins);
      setIsLoading(false);
    };
    res();
  }, []);
  const itemsFunction = () => {
    if (isLoading) return;
    const result = coins?.map((coin) => (
      <Box
        style={{
          paddingInline: "10px",
          marginInline: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={coin.iconUrl}
          alt={coin.name}
          style={{ marginBottom: "10px", height: "80px", width: "80px" }}
        />

        <Box>
          <Typography variant="h6"> {coin.symbol} </Typography>
          <Typography variant="body2" paddingRight={2}>
            $ {Number(coin.price).toLocaleString()}
          </Typography>
          {Number(coin.change) >= 0 ? (
            <Typography
              variant="body2"
              style={{ color: "green", display: "flex" }}
            >
              + {coin.change}{" "}
            </Typography>
          ) : (
            <Typography
              variant="body2"
              style={{ color: "red", display: "flex" }}
            >
              {coin.change}
            </Typography>
          )}
        </Box>
      </Box>
    ));
    return result;
  };
  const items = itemsFunction();

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  console.log(coins);
  if (isLoading) return <div>hello world</div>;
  return (
    <Box>
      <AliceCarousel
        mouseTracking
        infinite
        disableButtonsControls
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        autoPlay
        responsive={responsive}
        items={items}
      />
    </Box>
  );
};

export default Carousel;
