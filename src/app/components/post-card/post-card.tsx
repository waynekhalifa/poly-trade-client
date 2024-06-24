"use client";
import Image from "next/image";
import { Box, Button, List, Typography } from "@mui/material";
import { formatDate, getStrapiURL } from "@/app/utils/api-helpers";
import { excerptString } from "@/app/utils/excerpt-string";
import { CalendarMonth, Person } from "@mui/icons-material";
import LinkWrap from "../link-wrap";
import CategoryItem from "./category-item";

interface Props {
  post: any;
}

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
  const { url, alternativeText } = thumbnail.data.attributes;

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
      <LinkWrap
        href={"/news/" + slug}
        sx={{ position: "relative", display: "block", height: 200 }}
      >
        <Image
          src={getStrapiURL(url)}
          alt={alternativeText ? alternativeText : name}
          fill
        />
      </LinkWrap>
      <Box p={2}>
        <List disablePadding sx={{ display: "inline-flex" }}>
          {categories.data.map((item: any, index: Number) => (
            <CategoryItem
              key={item.id}
              item={item.attributes}
              isLast={index === categories.data.length - 1}
            />
          ))}
        </List>
        <LinkWrap href={"/news/" + slug}>
          <Typography
            gutterBottom
            variant="h6"
            component={"h3"}
            fontWeight={700}
            textTransform={"capitalize"}
            minHeight={64}
          >
            {excerptString(name, 40)}
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

        <Typography
          mt={2}
          mb={3}
          color="text.secondary"
          variant="body2"
          minHeight={60}
        >
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
        <LinkWrap href={"/news/" + slug}>
          <Button variant="contained" size="small">
            Read more
          </Button>
        </LinkWrap>
      </Box>
    </Box>
  );
};

export default PostCard;
