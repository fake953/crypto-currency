import { Prop } from "../../interfaces/interface";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { Box, Button, Skeleton, Grid } from "@mui/material";
const chartChangerValue = [
  {
    name: "24 Hours",
    time: 1,
  },
  {
    name: "1 Month",
    time: 30,
  },
  {
    name: "3 Months",
    time: 90,
  },
  {
    name: "1 Year",
    time: 365,
  },
];

export default function ChosenCoinChart({
  chartTime,
  chartChangerFunc,
  chartData,
}: Prop) {
  if (!chartData) return <Skeleton height={500} width={"100%"} />;

  const options = {
    elements: {
      point: {
        radius: 1,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      title: {
        display: true,
        text: "coin chart",
      },
    },
  };

  const labels = chartData.map((coin: number[]) => {
    const date = new Date(coin[0]);
    const time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;
    return chartTime === 1 ? time : date.toLocaleDateString();
  });
  const date = chartTime === 1 ? "day" : "days";
  const data = {
    labels,
    datasets: [
      {
        label: `Price in past ${chartTime} ${date}`,
        data: chartData.map((coin) => coin[1]),
        borderColor: "#90caf9",
        backgroundColor: "#90caf9",
        yAxisID: "y",
      },
    ],
  };
  return (
    <Box>
      <Line options={options} data={data} />
      <Grid alignItems={"center"} justifyItems={"center"} container>
        {chartChangerValue.map((value) => (
          <Grid item xs={12} sm={6} md={3} marginTop={3}>
            <Box display={"flex"} justifyContent={"center"}>
              <Button
                onClick={() => chartChangerFunc(value.time)}
                variant="contained"
              >
                {value.name}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
