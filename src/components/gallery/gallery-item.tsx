import { Grid } from "@mui/material";
import Image from "next/image";

import { getStrapiURL } from "@/utils/api-helpers";

interface Props {
  data: any;
}

const GalleryItem: React.FC<Props> = ({ data }) => {
  const { url, alternativeText, width, height } = data.attributes;

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      maxHeight={180}
      overflow={"hidden"}
    >
      <Image
        src={getStrapiURL(url)}
        alt={alternativeText ? alternativeText : "gallery-item-" + data.id}
        width={400}
        height={300}
      />
    </Grid>
  );
};

export default GalleryItem;
