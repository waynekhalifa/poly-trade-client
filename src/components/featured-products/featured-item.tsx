import Image from "next/image";
import { Box, Button, Stack, Typography } from "@mui/material";
import { getStrapiURL } from "@/utils/api-helpers";
import RichTextBlocks from "../rich-text-blocks";
import { ArrowRight } from "@mui/icons-material";
import LinkWrap from "../link-wrap";

interface Props {
  data: any;
}

const FeaturedItem: React.FC<Props> = ({ data }) => {
  const { name, slug, thumbnail, description } = data;

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      p={4}
      bgcolor={"common.white"}
    >
      <LinkWrap href={`/products/${slug}`}>
        <Box
          padding={3}
          // borderRadius={"16px"}
          bgcolor={"transparent"}
          mb={1}
          sx={{
            "&:hover": { bgcolor: "primary.main" },
            transition: "all .3s ease-in-out",
          }}
        >
          <Image
            src={getStrapiURL(thumbnail.data.attributes.url)}
            alt={name}
            width={56}
            height={56}
          />
        </Box>
      </LinkWrap>
      <LinkWrap href={`/products/${slug}`}>
        <Typography
          fontWeight={500}
          variant="h6"
          mb={3}
          sx={{ "&:hover": { color: "primary.main" } }}
        >
          {name}
        </Typography>
      </LinkWrap>
      <Box mb={3} textAlign={"center"} minHeight={320}>
        {description.map((item: any, index: number) => (
          <RichTextBlocks key={index} element={item} />
        ))}
      </Box>
      <LinkWrap href={`/products/${slug}`}>
        <Button
          size="large"
          sx={{
            fontWeight: 400,
            textTransform: "capitalize",
            color: "text.primary",
            "&:hover": { bgcolor: "transparent", color: "primary.main" },
            "& .MuiButton-endIcon": { ml: 0 },
          }}
          endIcon={<ArrowRight fontSize="small" />}
        >
          View Details
        </Button>
      </LinkWrap>
    </Stack>
  );
};

export default FeaturedItem;
