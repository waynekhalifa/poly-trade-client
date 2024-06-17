import { Grid, List, ListItem } from "@mui/material";
import GalleryItem from "./gallery-item";

interface Props {
  data: any;
}

const Gallery: React.FC<Props> = ({ data }) => {
  const { files } = data;

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      spacing={4}
      component={List}
    >
      {files.data.map((item: any) => (
        <Grid key={item.id} item xs={12} md={3} component={ListItem}>
          <GalleryItem data={item.attributes} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Gallery;
