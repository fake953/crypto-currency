import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

import { TrendingCoinsInterface } from "../interfaces/interface";
import { useCoinsContext } from "../context/coinsContext";

export default function DenseTable() {
  //at the line code bellow type script giving an error but don't worry about it i handeled this error in the home component,happy coding!
  const { TrendingCoinsType } = useCoinsContext();

  if (!TrendingCoinsType) return;
  return (
    <Box>
      <Paper>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          paddingBlock={2}
          paddingInline={2}
        >
          <Typography variant="body1">Rank</Typography>
          <Typography variant="body1">coin name</Typography>
          <Typography variant="body1">Price</Typography>
          <Typography variant="body1">24 %</Typography>
          <Typography variant="body1">Market Cap</Typography>
        </Box>
      </Paper>
      <Box maxHeight={500} overflow={"auto"}>
        {TrendingCoinsType.map((coin: TrendingCoinsInterface) => (
          <Paper style={{ marginTop: "5px" }} key={coin.name}>
            <Box
              position={"relative"}
              display={"flex"}
              alignItems={"center"}
              width={"100%"}
              paddingBlock={2}
              paddingInline={2}
            >
              <Typography
                position={"absolute"}
                top={17}
                left={20}
                variant="body1"
              >
                {coin.rank}
              </Typography>
              <Typography paddingLeft={35} variant="body1">
                <img
                  style={{
                    height: "20px",
                    width: "20px",
                    marginRight: "7px",
                  }}
                  src={coin.iconUrl}
                  alt=""
                />
                {coin.name}
              </Typography>
              <Typography
                position={"absolute"}
                top={17}
                left={570}
                variant="body1"
              >
                {coin.price}
              </Typography>
              {Number(coin.change) >= 0 ? (
                <Typography
                  style={{
                    color: "green",
                    position: "absolute",
                    top: "17px",
                    left: "900px",
                  }}
                >
                  + {coin.change}{" "}
                </Typography>
              ) : (
                <Typography
                  style={{
                    color: "red",
                    position: "absolute",
                    top: "17px",
                    left: "900px",
                  }}
                >
                  {coin.change}
                </Typography>
              )}
              <Typography
                position={"absolute"}
                top={17}
                left={1170}
                variant="body1"
              >
                {coin.marketCap}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
