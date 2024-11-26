import useResponsive from "@/hooks/useResponsive";
import { IMediaQuery } from "@/types/mediaQuery";
import { Box, Typography } from "@mui/material";

const params: IMediaQuery = { query: "up", key: "md" };

interface Props {
  element: any;
}

const RichTextBlocks: React.FC<Props> = ({ element }) => {
  const mdUp = useResponsive(params);

  const renderHeading = () => {
    return (
      <>
        {element.children.map((item: any, index: number) => (
          <Typography
            key={index}
            variant={mdUp ? "h5" : "h6"}
            fontWeight={700}
            mb={4}
          >
            {item.text}
          </Typography>
        ))}
      </>
    );
  };

  const renderParagraph = () => {
    return (
      <>
        {element.children.map((item: any, index: number) => (
          <Typography key={index} lineHeight={2}>
            {item.text}
          </Typography>
        ))}
      </>
    );
  };

  const renderList = () => {
    // @TODO render list item with link
    return (
      <Box component="ul" mb={3}>
        {element.children.map((item: any, index: number) => (
          <Box component={"li"} key={index} mb={1}>
            {item.children[0].text}
          </Box>
        ))}
      </Box>
    );
  };

  const renderElement = (): React.ReactNode => {
    if (element.type === "heading") return renderHeading();
    if (element.type === "paragraph") return renderParagraph();
    if (element.type === "list") return renderList();

    return null;
  };

  return <>{renderElement()}</>;
};

export default RichTextBlocks;
