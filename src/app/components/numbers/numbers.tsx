import { Grid } from "@mui/material";
import NumberItem from "./number-item";

interface Props {
  data: any;
}

const Numbers: React.FC<Props> = ({ data }) => {
  const { projects, clients, countries } = data;

  return (
    <Grid
      container
      justifyContent={"space-between"}
      alignItems={"center"}
      pt={5}
      sx={{ borderTop: "2px dashed", borderColor: "rgba(255,255,255,.4)" }}
    >
      <NumberItem value={projects} label={"Project Done"} />
      <NumberItem value={clients} label={"Happy Clients"} />
      <NumberItem value={countries} label={"Global Countries"} />
    </Grid>
  );
};

export default Numbers;
