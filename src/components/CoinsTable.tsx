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
  Pagination,
} from "@mui/material";

import { TrendingCoinsInterface } from "../interfaces/interface";
import { useCoinsContext } from "../context/coinsContext";
import { useNavigate } from "react-router-dom";

export default function CoinsTable() {
  const [page, setPage] = useState(1);
  const [pageManager, setPageManager] = useState(1);
  const navigate = useNavigate();
  const [tableCoins, setTableCoins] = useState<
    TrendingCoinsInterface[] | undefined
  >([]);
  //at the line code bellow type script giving an error but don't worry about it i handled this error in the home component,happy coding!
  const { coins, currency } = useCoinsContext();
  const priceFormatter = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const CurrencySymbol = () => {
    if (currency === "GBP") {
      return "£";
    } else if (currency === "EUR") {
      return "€";
    } else {
      return "$";
    }
  };
  const handelSearch = (value: string) => {
    if (page !== 1) {
      setPageManager(page);
    }
    if (value && page !== 1) {
      setPage(1);
    } else if (!value) {
      setPage(pageManager);
    }
    const specialCoins = coins?.filter((coin: TrendingCoinsInterface) =>
      coin.name.toLowerCase().includes(value.toLowerCase())
    );
    setTableCoins(specialCoins);
  };
  useEffect(() => {
    setTableCoins(coins);
  }, [coins]);
  if (!coins) return <Skeleton height={500} width={"100%"} />;
  return (
    <Box paddingInline={2}>
      <Typography paddingTop={3} variant="h4" textAlign={"center"}>
        Crypto Currencies by Market Cap
      </Typography>
      <Box borderRadius={10} display={"flex"} justifyContent={"center"}>
        <TextField
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            handelSearch(e.target.value);
          }}
          placeholder="Search for currency"
        />
      </Box>
      <TableContainer style={{ paddingTop: "10px", fontSize: "10px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Rank</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">24 %</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableCoins
              ?.slice((page - 1) * 10, (page - 1) * 10 + 10)
              ?.map((coin: TrendingCoinsInterface, i: number) => (
                <TableRow
                  onClick={() => {
                    navigate(`coins/${coin.id}`);
                  }}
                  hover
                  style={{ marginTop: "5px" }}
                  key={coin.name}
                >
                  <TableCell>
                    <Typography variant="body1">{i + 1}</Typography>
                  </TableCell>
                  <TableCell>
                    <Box display={"flex"}>
                      <Box>
                        <img
                          style={{
                            height: "30px",
                            width: "30px",
                            marginRight: "7px",
                          }}
                          src={coin.image}
                          alt="coin image"
                        />
                      </Box>
                      <Box paddingTop={0.7}>
                        <Typography variant="body1" component={"span"}>
                          {coin.name}
                        </Typography>
                      </Box>
                    </Box>
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
                  <TableCell>
                    {CurrencySymbol()} {""}
                    {priceFormatter(coin.current_price)}
                  </TableCell>
                  <TableCell>{coin.market_cap}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={tableCoins && Math.trunc(tableCoins?.length / 10)}
        onChange={(_, value) => {
          setPage(value);
        }}
        // defaultPage={CoinsTable.length / 10}
      />
    </Box>
  );
}
