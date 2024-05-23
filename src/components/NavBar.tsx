import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { CurrencyBitcoin } from "@mui/icons-material";

const NavBar = () => {
  return (
    <Box paddingBottom={1}>
      <AppBar>
        <Toolbar>
          <CurrencyBitcoin />
          <Typography marginLeft={2} variant="h6">
            Decentralized Currencies
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
