"use client";
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";

import { getStrapiURL } from "@/app/utils/api-helpers";
import RichTextBlocks from "../rich-text-blocks";
import { IListingResult } from "@/app/types/api";
import PostCard from "../post-card";

interface Props {
  data: any;
  relatedPosts: IListingResult;
}

const PostSections: React.FC<Props> = ({ data, relatedPosts }) => {
  const { name, description, thumbnail } = data.attributes;

  return (
    <Box pt={{ xs: 4, md: 8 }} pb={{ xs: 8, md: 12 }}>
      <Container>
        <Box
          sx={{
            mb: { xs: 3, md: 4 },
            position: "relative",
            width: "100%",
            paddingBottom: `${
              (thumbnail.data.attributes.height /
                thumbnail.data.attributes.width) *
              100
            }%`,
          }}
        >
          <Image
            src={getStrapiURL(thumbnail.data.attributes.url)}
            alt={
              thumbnail.data.attributes.alternativeText
                ? thumbnail.data.attributes.alternativeText
                : name
            }
            fill
            objectFit="contain"
          />
        </Box>
        {description.map((item: any, index: number) => (
          <RichTextBlocks key={index} element={item} />
        ))}
        <Box mt={{ xs: 4, md: 8 }}>
          <Typography variant="h4" fontWeight={500} mb={{ xs: 2, md: 3 }}>
            Related Posts
          </Typography>
          <Grid container spacing={2}>
            {relatedPosts &&
              relatedPosts.data.length > 0 &&
              relatedPosts.data.map((item: any) => (
                <Grid item key={item.id} xs={12} md={3}>
                  <PostCard post={item} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PostSections;
