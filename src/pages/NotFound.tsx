import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

function NotFound() {
  return (
    <Box marginTop={4}>
      <Typography variant="h3" component={"h1"}>
        404 Not Found
      </Typography>
      <ArrowBack />
      <Link
        to={"/"}
        style={{ color: "black", paddingLeft: "7px", paddingBottom: "10px" }}
      >
        {" "}
        Back to Home
      </Link>
    </Box>
  );
}

export default NotFound;
