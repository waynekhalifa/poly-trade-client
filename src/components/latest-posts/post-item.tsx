import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

import { formatDate, getStrapiURL } from "@/utils/api-helpers";
import { excerptString } from "@/utils/excerpt-string";
import LinkWrap from "../link-wrap";
import { Locale } from "@/types/locale";
import { Routes } from "@/enums/routes";

interface Props {
  data: any;
  locale: Locale;
}

const PostItem: React.FC<Props> = ({ data, locale }) => {
  const { name, slug, thumbnail, publishedAt } = data;

  return (
    <Grid container mb={3} columnSpacing={2}>
      <Grid item xs={4}>
        <Box overflow={"hidden"}>
          <LinkWrap
            href={Routes.ROOT + locale + "/news/" + slug}
            sx={{ position: "relative", height: 72 }}
          >
            <Image
              src={getStrapiURL(thumbnail.data.attributes.url)}
              alt={name}
              fill
            />
          </LinkWrap>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <LinkWrap href={Routes.ROOT + locale + "/news/" + slug}>
          <Typography
            fontWeight={500}
            component={"h5"}
            gutterBottom
            color={"common.white"}
            minHeight={48}
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
