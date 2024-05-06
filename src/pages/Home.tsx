// import axios from "axios";

//imported mui styling components section
import { Box } from "@mui/material";

//imported hooks section
// import { useState, useEffect } from "react";

//imported components section
// import { TrendingCoins } from "../API/AllAPI";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <Box>
      <Box position={"relative"}>
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
      </Box>
    </Box>
  );
}

export default Home;
