import { useParams } from "react-router-dom";

import { Grid, Box, LinearProgress } from "@mui/material";

import { useState, useEffect } from "react";

import { SingleCoin, HistoricalChart } from "../API/AllAPI";
import { useCoinsContext } from "../context/coinsContext";

import axios from "axios";
import CoinDescribtion from "../components/chosenCoinComponents/CoinDescribtion";
import ChosenCoinChart from "../components/chosenCoinComponents/ChosenCoinChart";

const ChosenCoin = () => {
  const { coins } = useCoinsContext();
  const [coin, setCoin] = useState();
  const [chartData, setChartData] = useState();
  const [chartTime, setChartTime] = useState(365);
  const Params = useParams<{ coinId: string }>();
  const chartChangerFunc = (value) => {
    setChartTime(value);
  };
  useEffect(() => {
    const res = async () => {
      try {
        const { data } = await axios.get(SingleCoin(Params.coinId));
        setCoin(data);
      } catch (error) {
        console.log(error);
      }
    };
    res();
  }, [Params.coinId]);
  useEffect(() => {
    const res = async () => {
      try {
        const { data } = await axios.get(
          HistoricalChart(Params.coinId, chartTime)
        );
        setChartData(data.prices);
        console.log(data.prices);
      } catch (error) {
        console.log(error);
      }
    };
    res();
  }, [Params.coinId, chartTime]);

  return coin && coins && chartData ? (
    <Box paddingTop={10}>
      <Grid container>
        <Grid item xs={4}>
          <CoinDescribtion coins={coins} coin={coin} />
        </Grid>
        <Grid item xs={8}>
          <ChosenCoinChart
            chartTime={chartTime}
            chartChangerFunc={chartChangerFunc}
            chartData={chartData}
          />
        </Grid>
      </Grid>
    </Box>
  ) : (
    <LinearProgress style={{ marginTop: "60px" }} />
  );
};

export default ChosenCoin;
