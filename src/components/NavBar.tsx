import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { CurrencyBitcoin } from "@mui/icons-material";
type props = {
  setCurrency: (value: string) => void;
};
const NavBar = ({ setCurrency }: props) => {
  return (
    <Box paddingBottom={1} sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <CurrencyBitcoin />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Decentralized Currencies
          </Typography>
          <select
            style={{
              padding: "8px",
              borderRadius: "7px",
              fontSize: "16px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              color: "white",
            }}
            name="currencies"
            id="currencies"
            onChange={(e) => {
              setCurrency(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value={"USD "}>USD </option>
            <option value={"EUR"}>EUR</option>
            <option value={"GBP"}>GBP</option>
          </select>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
