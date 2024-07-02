import { Box, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import parse from "html-react-parser";
interface forCoin {
  id: string;
  image: {
    large: string;
  };
  name: string;
  description: {
    en: string;
  };
}
type CoinDescriptionProp = {
  coin: forCoin;
  coins: TrendingCoinsInterface[];
};
import { TrendingCoinsInterface } from "../../interfaces/interface";
import { useCoinsContext } from "../../context/coinsContext";
const CoinDescription = ({ coin, coins }: CoinDescriptionProp) => {
  const { currency } = useCoinsContext();
  const [chosenCoin, setChosenCoin] = useState<TrendingCoinsInterface>();
  const CurrencySymbol = () => {
    if (currency === "GBP") {
      return "£";
    } else if (currency === "EUR") {
      return "€";
    } else {
      return "$";
    }
  };
  const priceFormatter = (price: string | number) => {
    if (!price) return;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const documentFormatter = (doc: string) => {
    if (!doc) return;
    return parse(doc);
  };
  useEffect(() => {
    const filteredCoin = coins.filter(
      (currency: TrendingCoinsInterface) => currency.id === coin.id
    );
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
            {priceFormatter(Number(chosenCoin?.current_price))}{" "}
            {CurrencySymbol()}
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
          {documentFormatter(coin?.description?.en?.split(". ")[0])}
        </Typography>
      </Box>
    </Box>
  );
};

export default CoinDescription;
