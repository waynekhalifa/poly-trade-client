import Image from "next/image";
import { Box } from "@mui/material";

import Logo from "../logo";
import FooterTextLogo from "../footer-text-logo";
import { getStrapiURL } from "@/utils/api-helpers";

interface Props {
  data: any;
  imgHeight?: number;
}

const NewLogo: React.FC<Props> = ({ data, imgHeight }) => {
  const { text, placement, file, padding, margin } = data;

  return (
    <Box
      pt={padding ? padding.top : 0}
      pb={padding ? padding.bottom : 0}
      pl={padding ? padding.left : 0}
      pr={padding ? padding.right : 0}
      mt={margin ? margin.top : 0}
      mb={margin ? margin.bottom : 0}
      ml={margin ? margin.left : 0}
      mr={margin ? margin.right : 0}
      sx={{ span: { display: "block" } }}
    >
      <Box
        component={"a"}
        href={data.url.href}
        target={data.url.newTab ? "_blank" : "_self"}
        sx={{
          display: "block",
          maxWidth: imgHeight ? imgHeight : 160,
          mx: placement === "auth" ? "auto" : 0,
        }}
      >
        {file && file.data ? (
          <Image
            src={getStrapiURL(file.data.attributes.url)}
            alt={
              file.data.attributes.alternativeText
                ? file.data.attributes.alternativeText
                : data.url.ariaLabel
            }
            width={file.data.attributes.width}
            height={file.data.attributes.height}
            priority
          />
        ) : (
          <>
            {placement === "header" && (
              <Logo placement={placement} logoText={text} />
            )}
            {placement === "footer" && (
              <FooterTextLogo>
                <Logo placement={placement} logoText={text} />
              </FooterTextLogo>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default NewLogo;
