import { Skeleton, Stack } from "@mui/material";
const LoadingHome = () => {
  return (
    <Stack spacing={1}>
      <Skeleton height={300} width={"100%"} />
      <Skeleton height={70} width={"100%"} />
      <Skeleton height={500} width={"100%"} />
    </Stack>
  );
};

export default LoadingHome;
