import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { getStrapiURL } from "@/app/utils/api-helpers";
import calculateNewWidth from "@/app/utils/calculateNewWidth";

interface Props {
  data: any;
}

const Service: React.FC<Props> = ({ data }) => {
  const { label, icon } = data;

  return (
    <Grid
      container
      alignItems={"center"}
      columnGap={2}
      mb={2}
      sx={{ "&:last-of-type": { mb: 0 } }}
    >
      <Box
        width={56}
        height={56}
        border={"1px solid"}
        borderColor={"common.white"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"50%"}
      >
        <Image
          src={getStrapiURL(icon.data.attributes.url)}
          alt={icon.data.attributes.alternativeText}
          width={Math.floor(
            calculateNewWidth(
              icon.data.attributes.width,
              icon.data.attributes.height,
              32
            )
          )}
          height={32}
        />
      </Box>
      <Typography
        fontWeight={300}
        variant="h6"
        component={"p"}
        color={"common.white"}
      >
        {label}
      </Typography>
    </Grid>
  );
};

export default Service;
