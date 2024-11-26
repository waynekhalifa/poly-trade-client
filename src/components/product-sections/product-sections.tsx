"use client";

import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";

import { getStrapiURL } from "@/app/utils/api-helpers";
import RichTextBlocks from "../rich-text-blocks";
import { IListingResult } from "@/app/types/api";
import ProductCard from "../products/product-card";

interface Props {
  data: any;
  relatedProducts: IListingResult;
}

const ProductSections: React.FC<Props> = ({ data, relatedProducts }) => {
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
          <Grid container spacing={4}>
            {relatedProducts &&
              relatedProducts.data.length > 0 &&
              relatedProducts.data.map((item: any) => (
                <Grid item key={item.id} xs={12} md={4}>
                  <ProductCard product={item} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductSections;
