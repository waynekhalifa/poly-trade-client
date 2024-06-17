import { Grid } from "@mui/material";
import "swiper/css";
import ListItem from "./list-item";

interface Props {
  data: any;
}

const TextImageList: React.FC<Props> = ({ data }) => {
  const { list } = data;

  return (
    <Grid container spacing={4}>
      {list.map((item: any) => (
        <Grid key={item.id} item xs={12} md={3}>
          <ListItem image={item.image} text={item.text} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TextImageList;
