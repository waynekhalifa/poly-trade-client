import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";

import { AccessTime } from "@mui/icons-material";
import { formatDate, getStrapiURL } from "@/app/utils/api-helpers";
import { excerptString } from "@/app/utils/excerpt-string";
import calculateNewWidth from "@/app/utils/calculateNewWidth";
import LinkWrap from "../../link-wrap";

interface Props {
  post: any;
  color?: string;
}

const PostItem: React.FC<Props> = ({ post, color }) => {
  const { name, slug, thumbnail, publishedAt } = post.attributes;

  return (
    <Grid container columnGap={2} mb={2} sx={{ "&:last-of-type": { mb: 0 } }}>
      <LinkWrap href={"/blog/" + slug}>
        <Image
          src={getStrapiURL(thumbnail.data.attributes.url)}
          alt={name}
          width={Math.floor(
            calculateNewWidth(
              thumbnail.data.attributes.width,
              thumbnail.data.attributes.height,
              72
            )
          )}
          height={72}
        />
      </LinkWrap>
      <Box flex={1}>
        <Typography
          fontWeight={700}
          component={"h4"}
          gutterBottom
          color={color ? color : "common.white"}
        >
          {excerptString(post.attributes.name, 40)}
        </Typography>
        <Grid container alignItems={"center"}>
          <AccessTime
            fontSize="small"
            sx={{ mr: 1, color: "primary.main", transform: "scale(.8)" }}
          />
          <Typography
            variant="body2"
            color={color ? color : "common.white"}
            fontWeight={300}
          >
            {formatDate(publishedAt)}
          </Typography>
        </Grid>
      </Box>
    </Grid>
  );
};

export default PostItem;
