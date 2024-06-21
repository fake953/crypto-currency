import { useCoinsContext } from "../context/coinsContext";
import { AllNewsInterface } from "../interfaces/interface";

import AliceCarousel from "react-alice-carousel";

import {
  Box,
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
export const News = () => {
  const { news } = useCoinsContext();
  if (news.length <= 0) return;
  const newsTemplate = () => {
    const res = news.map((artical: AllNewsInterface) => (
      <Box marginInline={1} marginTop={3}>
        <Card>
          <CardContent style={{ marginTop: "-1px" }}>
            <Typography variant="h6">{artical.title}</Typography>
            <Typography variant="body2">{artical.description}</Typography>
            <CardActions>
              {" "}
              <Button
                size="small"
                onClick={() => {
                  window.open(artical.url, "_Blank");
                }}
              >
                read more{" "}
              </Button>
            </CardActions>
          </CardContent>
          <Box>
            <Typography variant="body2" paddingTop={0.5} paddingLeft={1}>
              Created at {artical.date}
            </Typography>
          </Box>
        </Card>
      </Box>
    ));
    return res;
  };
  const template = newsTemplate();
  const responsive = {
    0: {
      items: 1,
    },
    480: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  };
  return (
    <Box>
      <AliceCarousel
        infinite
        disableButtonsControls
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        autoPlay
        responsive={responsive}
        items={template}
      />
    </Box>
  );
};
