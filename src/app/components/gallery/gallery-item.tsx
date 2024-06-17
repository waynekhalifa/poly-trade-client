import { getStrapiURL } from "@/app/utils/api-helpers";
import calculateNewWidth from "@/app/utils/calculateNewWidth";
import { Grid } from "@mui/material";
import Image from "next/image";

interface Props {
  data: any;
}

const GalleryItem: React.FC<Props> = ({ data }) => {
  const { url, alternativeText, width, height } = data;

  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Image
        src={getStrapiURL(url)}
        alt={alternativeText}
        width={Math.floor(calculateNewWidth(width, height, 160))}
        height={160}
      />
    </Grid>
  );
};

export default GalleryItem;
