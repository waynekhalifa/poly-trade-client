import Image from "next/image";
import { Box, Typography } from "@mui/material";

import { getStrapiURL } from "@/utils/api-helpers";
import { excerptString } from "@/utils/excerpt-string";
import LinkWrap from "../link-wrap";
import { Routes } from "@/enums/routes";
import { Locale } from "@/types/locale";
import { Languages } from "@/enums/languages";

interface Props {
  product: any;
  locale: Locale;
}

const ProductCard: React.FC<Props> = ({ product, locale }) => {
  const { name, arName, slug, thumbnail } = product.attributes;
  const { url, alternativeText } = thumbnail.data.attributes;

  const productName: string = locale === Languages.ENGLISH ? name : arName;

  return (
    <Box
      id={`product-${product.id}`}
      position="relative"
      height={471}
      boxShadow={"0px 5px 10px 0px rgba(0, 0, 0, 0.15)"}
      sx={{
        bgcolor: "grey.100",
        overflowY: "hidden",
        "&:hover": {
          ".overly": {
            transform: "translateY(0%)",
          },
          ".product-title": {
            transform: "translateY(100%)",
          },
        },
      }}
    >
      <LinkWrap
        className="overly"
        href={Routes.ROOT + locale + "/products/" + slug}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          inset: "0",
          zIndex: "1",
          bgcolor: "rgba(206,37,39,0.9)",
          color: "common.white",
          fontWeight: 400,
          transform: "translateY(-100%)",
          transition: "all .2s ease-in-out",
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component={"h2"}
          textTransform={"capitalize"}
          textAlign={"center"}
        >
          {excerptString(productName, 40)}
        </Typography>
      </LinkWrap>
      <LinkWrap
        href={Routes.ROOT + locale + "/products/" + slug}
        sx={{ position: "relative", display: "block", height: 400 }}
      >
        <Image
          src={getStrapiURL(url)}
          alt={alternativeText ? alternativeText : productName}
          fill
        />
      </LinkWrap>
      <LinkWrap
        href={Routes.ROOT + locale + "/products/" + slug}
        className="product-title"
        sx={{
          transition: "all .3s ease-in-out",
          display: "block",
          py: { xs: 1, md: 2 },
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component={"h2"}
          fontWeight={700}
          textTransform={"capitalize"}
          textAlign={"center"}
        >
          {excerptString(productName, 40)}
        </Typography>
      </LinkWrap>
    </Box>
  );
};

export default ProductCard;
