//imported mui styling components section
import { Box } from "@mui/material";

//imported hooks section
import { useCoinsContext } from "../context/coinsContext";
//imported components section
import Carousel from "../components/Carousel";
import CoinsTable from "../components/CoinsTable";
import { News } from "../components/News";

import LoadingHome from "../components/LoadingHome";

function Home() {
  const { isLoading } = useCoinsContext();
  //
  if (isLoading) {
    return <LoadingHome />;
  }
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box style={{ width: "100%" }} position={"relative"}>
        <img
          style={{ height: "300px", width: "100%", objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1639322537138-5e513100b36e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <News />
      </Box>
    </Box>
  );
}

export default Home;
