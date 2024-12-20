"use client";

import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";

import { getStrapiURL } from "@/utils/api-helpers";
import RichTextBlocks from "../rich-text-blocks";
import { IListingResult } from "@/types/api";
import ProductCard from "../products/product-card";
import { Locale } from "@/types/locale";
import { Languages } from "@/enums/languages";

interface Props {
  data: any;
  locale: Locale;
  relatedProducts: IListingResult;
}

const ProductSections: React.FC<Props> = ({
  data,
  relatedProducts,
  locale,
}) => {
  const { name, arName, description, arDescription, thumbnail } =
    data.attributes;

  const productName: string = locale === Languages.ENGLISH ? name : arName;
  const productDescription: any =
    locale === Languages.ENGLISH ? description : arDescription;

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
          {productName}
        </Typography>
        {productDescription.map((item: any, index: number) => (
          <RichTextBlocks key={index} element={item} />
        ))}
        <Box mt={{ xs: 4, md: 8 }}>
          <Grid container spacing={4}>
            {relatedProducts &&
              relatedProducts.data.length > 0 &&
              relatedProducts.data.map((item: any) => (
                <Grid item key={item.id} xs={12} md={4}>
                  <ProductCard product={item} locale={locale} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductSections;
