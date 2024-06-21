import { Box, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import parse from "html-react-parser";

import { TrendingCoinsInterface } from "../../interfaces/interface";
const CoinDescribtion = ({ coin, coins }) => {
  const [chosenCoin, setChosenCoin] = useState<TrendingCoinsInterface>();
  function priceFormatter(price: string | number) {
    if (!price) return;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function documentFormatter(doc: string) {
    if (!doc) return;
    return parse(doc);
  }
  useEffect(() => {
    const filteredCoin = coins.filter((currency) => currency.id === coin.id);
    setChosenCoin(filteredCoin[0]);
  }, [coin, coins]);
  if (!coins) return <Typography paddingTop={15}>Loading</Typography>;
  return (
    <Box paddingLeft={3} paddingRight={2} borderRight={0}>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <img src={coin?.image?.large} width={"50%"} alt="" />
          <Typography paddingLeft={3} variant="h5">
            {coin?.name}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography variant="h6" component={"span"}>
            Current Price :
          </Typography>
          <Typography variant="body1" component={"span"}>
            {priceFormatter(Number(chosenCoin?.current_price))} $
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component={"span"}>
            Market Cap :
          </Typography>
          <Typography variant="body1" component={"span"}>
            {priceFormatter(Number(chosenCoin?.market_cap))}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" component={"span"}>
          About {coin?.name}:{" "}
        </Typography>
        <Typography variant="body1" component={"span"}>
          {documentFormatter(coin?.description?.en)}
        </Typography>
      </Box>
    </Box>
  );
};

export default CoinDescribtion;
