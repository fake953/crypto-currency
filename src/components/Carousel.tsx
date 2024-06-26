import { NavLink } from "react-router-dom";
import { TrendingCoinsInterface } from "../interfaces/interface";
import { Box, Typography } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import { useCoinsContext } from "../context/coinsContext";

const Carousel = () => {
  //at the line code bellow type script giving an error but don't worry about it i handeled this error in the home component,happy coding!
  const { coins, isLoading } = useCoinsContext();
  function priceFormatter(price: number) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const itemsFunction = () => {
    if (isLoading) return;
    const result = coins?.map((coin: TrendingCoinsInterface) => (
      <NavLink
            key={coin.id}
        style={{ color: "white", textDecoration: "none" }}
        to={`coins/${coin.id}`}
      >
        <Box
          style={{
            paddingInline: "10px",
            marginInline: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={coin.image}
            alt={coin.name}
            style={{ marginBottom: "10px", height: "80px", width: "80px" }}
          />

          <Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography
                variant="body2"
                component={"span"}
                paddingRight={1}
                paddingBottom={0.5}
              >
                {" "}
                {coin.symbol}{" "}
              </Typography>
              {Number(coin.price_change_percentage_24h.toLocaleString()) >=
              0 ? (
                <Typography
                  component={"span"}
                  variant="body2"
                  style={{ color: "green", display: "flex" }}
                >
                  + {`${coin.price_change_percentage_24h} %`}{" "}
                </Typography>
              ) : (
                <Typography
                  component={"span"}
                  variant="body2"
                  style={{ color: "red", display: "flex" }}
                >
                  {`${coin.price_change_percentage_24h} %`}
                </Typography>
              )}
            </Box>

            <Typography variant="body2" paddingRight={2}>
              $ {priceFormatter(coin.current_price)}
            </Typography>
          </Box>
        </Box>
      </NavLink>
    ));
    return result;
  };
  const items = itemsFunction();

  const responsive = {
    0: {
      items: 1,
    },
    320: {
      items: 2,
    },
    512: {
      items: 3,
    },
    780: {
      items: 4,
    },
  };
  if (isLoading) return <div>hello world</div>;
  return (
    <Box>
      <AliceCarousel
        mouseTracking
        infinite
        disableButtonsControls
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        autoPlay
        responsive={responsive}
        items={items}
      />
    </Box>
  );
};

export default Carousel;
