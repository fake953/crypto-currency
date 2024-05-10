import axios from "axios";

//imported mui styling components section
import { Box, Typography } from "@mui/material";

//imported hooks section
import { useEffect } from "react";
import { useCoinsContext } from "../context/coinsContext";
//imported components section
import { TrendingCoins } from "../API/AllAPI";
import Carousel from "../components/Carousel";
import CoinsTable from "../components/CoinsTable";

function Home() {
  //at the line code bellow type script giving an error but don't worry about it i handeled this error in the home component,happy coding!
  const { setIsLoadingType, setTrendingCoinsType, isLoadingType } =
    useCoinsContext();
  useEffect(() => {
    console.log("api sended");

    setIsLoadingType(true);
    const res = async () => {
      const response = await axios.get(TrendingCoins(), {
        headers: {
          "X-RapidAPI-Key":
            "90036e5006msh9c507143836a26bp115d86jsn545e41f4f9e8",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      });
      setIsLoadingType(false);
      setTrendingCoinsType(response.data.data.coins);
    };
    res();
  }, []);
  if (isLoadingType) {
    return (
      <Typography variant="h2" paddingTop={15} textAlign={"center"}>
        Loading...
      </Typography>
    );
  }
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box style={{ width: "1300px" }} position={"relative"}>
        <img
          style={{ height: "300px", width: "100%", objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1640826514546-7d2eab70a4e5?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <Box
          position={"absolute"}
          top={130}
          textAlign={"center"}
          maxWidth={"100%"}
          minWidth={"100%"}
        >
          <Carousel />
        </Box>
        <CoinsTable />
      </Box>
    </Box>
  );
}

export default Home;
