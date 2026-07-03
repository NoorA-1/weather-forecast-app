import { CircularProgress, Stack, Typography } from "@mui/material";

function Loader({ message = "Loading..." }) {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <Typography>{message}</Typography>
    </Stack>
  );
}

export default Loader;
