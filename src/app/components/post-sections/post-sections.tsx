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
        <Image
          src={getStrapiURL(thumbnail.data.attributes.url)}
          alt={
            thumbnail.data.attributes.alternativeText
              ? thumbnail.data.attributes.alternativeText
              : name
          }
          width={thumbnail.data.attributes.width}
          height={thumbnail.data.attributes.height}
        />
        <Typography
          component="h2"
          variant="h5"
          fontWeight={700}
          mt={{ xs: 3, md: 4 }}
          mb={{ xs: 2, md: 3 }}
        >
          {name}
        </Typography>
        {description.map((item: any, index: number) => (
          <RichTextBlocks key={index} element={item} />
        ))}
        <Box mt={{ xs: 4, md: 8 }}>
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
