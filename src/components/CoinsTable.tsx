import { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  TextField,
  Box,
  Typography,
  Skeleton,
} from "@mui/material";

import { TrendingCoinsInterface } from "../interfaces/interface";
import { useCoinsContext } from "../context/coinsContext";
import { NavLink } from "react-router-dom";

export default function CoinsTable() {
  const [tableCoins, setTableCoins] = useState<TrendingCoinsInterface[]|undefined>([]);
  //at the line code bellow type script giving an error but don't worry about it i handeled this error in the home component,happy coding!
  const { coins } = useCoinsContext();
  function priceFormatter(price: number) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const handelSearch = (value: string) => {
    const speacialCoins = coins?.filter((coin: TrendingCoinsInterface) =>
      coin.name.toLowerCase().includes(value.toLowerCase())
    );
    setTableCoins(speacialCoins);
  };
  useEffect(() => {
    setTableCoins(coins);
  }, [coins]);
  if (!coins) return <Skeleton height={500} width={"100%"} />;
  return (
    <Box paddingInline={2}>
      <Typography paddingTop={3} variant="h4" textAlign={"center"}>
        Crypto Curencies by Market Cap
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          handelSearch(e.target.value);
        }}
        label="search for currency"
      />
      <TableContainer style={{ paddingTop: "10px", fontSize: "10px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">coin name</TableCell>
              <TableCell align="left">24 %</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableCoins?.map((coin: TrendingCoinsInterface) => (
              <TableRow hover style={{ marginTop: "5px" }} key={coin.name}>
                <TableCell>
                  <NavLink to={`coins/${coin.id}`}>
                    <img
                      style={{
                        height: "3%",
                        width: "3%",
                        marginRight: "7px",
                      }}
                      src={coin.image}
                      alt=""
                    />
                    {coin.name}
                  </NavLink>
                </TableCell>
                {Number(coin.price_change_percentage_24h.toLocaleString()) >=
                0 ? (
                  <TableCell
                    style={{
                      color: "green",
                    }}
                  >
                    + {`${coin.price_change_percentage_24h} %`}{" "}
                  </TableCell>
                ) : (
                  <TableCell
                    style={{
                      color: "red",
                    }}
                  >
                    {`${coin.price_change_percentage_24h} %`}
                  </TableCell>
                )}
                <TableCell>$ {priceFormatter(coin.current_price)}</TableCell>
                <TableCell>{coin.market_cap}</TableCell>
              </TableRow>
              // </NavLink>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
