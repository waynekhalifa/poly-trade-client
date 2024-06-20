import { Box, Typography } from "@mui/material";

import RichTextBlocks from "../rich-text-blocks";
import { linearGradient } from "@/app/utils/bg-gradient";

interface Props {
  data: any;
}

const ContactInfo: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <Box
      color={data.color}
      minHeight={data.minHeight}
      bgcolor={
        data.background && data.background.color
          ? data.background.color
          : "transparent"
      }
      sx={{
        backgroundImage:
          data.background && data.background.gradient
            ? linearGradient(
                data.background.gradient.startColor,
                data.background.gradient.endColor,
                data.background.gradient.degree
              )
            : "none",
        pt: data.padding ? data.padding.top : 0,
        pb: data.padding ? data.padding.bottom : 0,
        pl: data.padding ? data.padding.left : 0,
        pr: data.padding ? data.padding.right : 0,
      }}
    >
      <Typography variant="h4" fontWeight={500} paragraph>
        {data.title}
      </Typography>
      {data.description.map((item: any, index: number) => (
        <RichTextBlocks key={index} element={item} />
      ))}
    </Box>
  );
};

export default ContactInfo;
