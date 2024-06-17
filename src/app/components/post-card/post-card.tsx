"use client";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import { formatDate, getStrapiURL } from "@/app/utils/api-helpers";
import calculateNewHeight from "@/app/utils/calculateNewHeight";
import { excerptString } from "@/app/utils/excerpt-string";
import { CalendarMonth, Person } from "@mui/icons-material";
import LinkWrap from "../link-wrap";

interface Props {
  post: any;
}

const options: any = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

const PostCard: React.FC<Props> = ({ post }) => {
  const {
    name,
    slug,
    description,
    categories,
    publishedAt,
    thumbnail,
    author,
  } = post.attributes;
  const { url, alternativeText, width, height } = thumbnail.data.attributes;
  return (
    <Box
      id={`post-${post.id}`}
      alignItems={"center"}
      // borderRadius={"6px"}
      boxShadow={"0px 5px 10px 0px rgba(0, 0, 0, 0.15)"}
      sx={{
        borderStyle: "solid",
        borderWidth: "1px 1px 5px 1px",
        borderColor: "primary.main",
        img: { maxWidth: "100%", height: "auto" },
        "&:hover": { borderColor: "primary.light" },
      }}
    >
      <LinkWrap href={"/blog/" + slug}>
        <Image
          src={getStrapiURL(url)}
          alt={alternativeText ? alternativeText : name}
          height={Math.floor(calculateNewHeight(width, height, 372))}
          width={372}
        />
      </LinkWrap>
      <Box p={3}>
        {/* <List disablePadding sx={{ display: "inline-flex", mt: 2 }}>
          {categories.data.map((item: any, index: Number) => (
            <CategoryItem
              key={item.id}
              item={item.attributes}
              isLast={index === categories.data.length - 1}
            />
          ))}
        </List> */}
        <LinkWrap href={"/blog/" + slug}>
          <Typography
            paragraph
            variant="h6"
            component={"h3"}
            fontWeight={700}
            textTransform={"capitalize"}
          >
            {excerptString(name, 60)}
          </Typography>
        </LinkWrap>
        <Button
          size="small"
          startIcon={
            <Person
              fontSize="small"
              sx={{ color: "primary.main", transform: "scale(.9)" }}
            />
          }
          sx={{
            p: 0,
            color: "text.secondary",
            textTransform: "capitalize",
            "&:hover": { bgcolor: "transparent" },
          }}
        >
          {author.data.attributes.name}
        </Button>
        <Button
          size="small"
          startIcon={
            <CalendarMonth
              fontSize="small"
              sx={{ color: "primary.main", transform: "scale(.9)", ml: 2 }}
            />
          }
          sx={{
            p: 0,
            color: "text.secondary",
            textTransform: "capitalize",
            "&:hover": { bgcolor: "transparent" },
          }}
        >
          {formatDate(publishedAt)}
        </Button>

        <Typography mt={2} mb={3} color="text.secondary" variant="body2">
          {excerptString(description[0].children[0].text, 160)}
        </Typography>
        {/* <Typography
          variant="body2"
          color={"text.secondary"}
          textAlign={"center"}
          textTransform={"capitalize"}
        >
          {formatDate(publishedAt)}
        </Typography> */}
        <LinkWrap href={"/blog/" + slug}>
          <Button variant="contained" size="small">
            read more
          </Button>
        </LinkWrap>
      </Box>
    </Box>
  );
};

export default PostCard;
