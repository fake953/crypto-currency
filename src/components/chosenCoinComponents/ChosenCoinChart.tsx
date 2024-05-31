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

import { Box, Button } from "@mui/material";
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
}) {
  const options = {
    elements: {
      point: {
        radius: 1,
      },
    },
    responsive: true,
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

  const labels = chartData.map((coin) => {
    const date = new Date(coin[0]);
    const time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;
    return chartTime === 1 ? time : date.toLocaleDateString();
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
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
      <Box display={"flex"} justifyContent={"space-between"}>
        {chartChangerValue.map((value) => (
          <Box marginInline={3} paddingInline={2}>
            <Button
              onClick={() => chartChangerFunc(value.time)}
              variant="contained"
            >
              {value.name}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
