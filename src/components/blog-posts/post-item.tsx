import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import RichTextBlocks from "../rich-text-blocks";
import { getStrapiURL } from "@/utils/api-helpers";
import calculateNewWidth from "@/utils/calculateNewWidth";
import LinkWrap from "../link-wrap";

interface Props {
  data: any;
}

const PostItem: React.FC<Props> = ({ data }) => {
  const { name, slug, thumbnail, description } = data;

  return (
    <Box overflow={"hidden"} border={"1px solid"} borderColor={"divider"}>
      <LinkWrap href={`/products/${slug}`}>
        <Box>
          <Image
            src={getStrapiURL(thumbnail.data.attributes.url)}
            alt={name}
            width={Math.floor(
              calculateNewWidth(
                thumbnail.data.attributes.width,
                thumbnail.data.attributes.height,
                300
              )
            )}
            height={240}
          />
        </Box>
      </LinkWrap>
      <Box p={3}>
        <LinkWrap href={`/products/${slug}`}>
          <Typography
            fontWeight={500}
            variant="h6"
            mb={2}
            minHeight={64}
            sx={{ "&:hover": { color: "primary.main" } }}
          >
            {name}
          </Typography>
        </LinkWrap>
        <Box mb={1} minHeight={80}>
          {description.map((item: any, index: number) => (
            <RichTextBlocks key={index} element={item} />
          ))}
        </Box>
        <LinkWrap href={`/products/${slug}`}>
          <Button
            size="large"
            sx={{
              p: 0,
              fontWeight: 400,
              textTransform: "capitalize",
              color: "primary.main",
              "&:hover": { bgcolor: "transparent" },
            }}
          >
            Continue reading
          </Button>
        </LinkWrap>
      </Box>
    </Box>
  );
};

export default PostItem;
