import { CircularProgress, Grid } from "@mui/material";

const Loader: React.FC = () => {
  return (
    <Grid container justifyContent={"center"}>
      <CircularProgress />
    </Grid>
  );
};

export default Loader;
