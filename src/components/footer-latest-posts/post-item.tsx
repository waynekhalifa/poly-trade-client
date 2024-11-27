import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

import { formatDate, getStrapiURL } from "@/utils/api-helpers";
import { excerptString } from "@/utils/excerpt-string";
import calculateNewWidth from "@/utils/calculateNewWidth";
import LinkWrap from "../link-wrap";

interface Props {
  data: any;
}

const PostItem: React.FC<Props> = ({ data }) => {
  const { name, slug, thumbnail, publishedAt } = data;

  return (
    <Grid container mb={3} columnSpacing={3}>
      <Grid item xs={4}>
        <Box overflow={"hidden"}>
          <LinkWrap href={"/blog/" + slug}>
            <Image
              src={getStrapiURL(thumbnail.data.attributes.url)}
              alt={name}
              width={Math.floor(
                calculateNewWidth(
                  thumbnail.data.attributes.width,
                  thumbnail.data.attributes.height,
                  64
                )
              )}
              height={64}
            />
          </LinkWrap>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <LinkWrap href={"/blog/" + slug}>
          <Typography
            fontWeight={500}
            component={"h5"}
            gutterBottom
            color={"common.white"}
          >
            {excerptString(name, 42)}
          </Typography>
        </LinkWrap>
        <Grid container alignItems={"center"}>
          <AccessTime
            fontSize="small"
            sx={{ mr: 1, color: "grey.500", transform: "scale(0.8)" }}
          />
          <Typography variant="body2" color={"grey.500"} fontWeight={300}>
            {formatDate(publishedAt)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PostItem;
