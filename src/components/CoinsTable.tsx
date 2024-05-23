import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

import { TrendingCoinsInterface } from "../interfaces/interface";
import { useCoinsContext } from "../context/coinsContext";

export default function CoinsTable() {
  const [tableCoins, setTableCoins] = useState<TrendingCoinsInterface[]>([]);
  //at the line code bellow type script giving an error but don't worry about it i handeled this error in the home component,happy coding!
  const { coins } = useCoinsContext();
  function priceFormatter(price: number) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const handelSearch = (value: string) => {
    const speacialCoins = coins.filter((coin: TrendingCoinsInterface) =>
      coin.name.toLowerCase().includes(value.toLowerCase())
    );
    setTableCoins(speacialCoins);
    console.log(speacialCoins);
  };
  useEffect(() => {
    setTableCoins(coins);
  }, [coins]);
  if (!coins) return;
  return (
    <TableContainer style={{ paddingTop: "10px" }}>
      <Table>
        <TableHead>
          <TextField
            variant="outlined"
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              handelSearch(e.target.value);
            }}
            label="search for currency"
          />
          <TableRow>
            <TableCell align="left">Rank</TableCell>
            <TableCell align="left">coin name</TableCell>
            <TableCell align="left">24 %</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Market Cap</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableCoins.map((coin: TrendingCoinsInterface) => (
            <TableRow hover style={{ marginTop: "5px" }} key={coin.name}>
              <TableCell>{coin.market_cap_rank}</TableCell>
              <TableCell>
                <img
                  style={{
                    height: "20px",
                    width: "20px",
                    marginRight: "7px",
                  }}
                  src={coin.image}
                  alt=""
                />
                {coin.name}
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
