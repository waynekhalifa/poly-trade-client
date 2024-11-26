"use client";
import { Box, Typography } from "@mui/material";
import RichTextBlocks from "../rich-text-blocks";
import { Fragment } from "react";
import LinkWrap from "../link-wrap";

interface Props {
  data: any;
}

const RichText: React.FC<Props> = ({ data }) => {
  const { name, color, padding, margin, height, width, alignment, content } =
    data;

  const renderText = (item: any): React.ReactNode => (
    <>{item.text.length > 0 && item.text}</>
  );

  const renderLink = (item: any): React.ReactNode => (
    <LinkWrap
      href={item.url}
      blank={item.children[0].text === "IZOSS" ? true : false}
    >
      {item.children[0].text}
    </LinkWrap>
  );

  return (
    <Box
      maxWidth={width ? width : 1}
      pt={padding ? padding.top : 0}
      pb={padding ? padding.bottom : 0}
      pl={padding ? padding.left : 0}
      pr={padding ? padding.right : 0}
      mt={margin ? margin.top : 0}
      mb={margin ? margin.bottom : 0}
      ml={margin ? margin.left : "auto"}
      mr={margin ? margin.right : "auto"}
      textAlign={{
        xs: alignment ? alignment.xs : "start",
        sm: alignment ? alignment.sm : "start",
        md: alignment ? alignment.md : "start",
        lg: alignment ? alignment.lg : "start",
      }}
      minHeight={height === 1 ? "auto" : height}
      color={color}
      sx={{ a: { color: "primary.main" } }}
    >
      {name !== "copy-right" &&
        content.map((item: any, index: number) => (
          <RichTextBlocks key={index} element={item} />
        ))}
      {name === "copy-right" && (
        <Typography variant="body2">
          {content[0].children.map((item: any, index: number) => (
            <Fragment key={index}>
              {item.type === "text" ? renderText(item) : renderLink(item)}
            </Fragment>
          ))}
        </Typography>
      )}
    </Box>
  );
};

export default RichText;
