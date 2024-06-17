import { MD_UP_PARAMS } from "@/app/constants/media-queries";
import useResponsive from "@/app/hooks/useResponsive";
import { Box, Typography } from "@mui/material";

interface Props {
  data: any;
}

const HeroTitle: React.FC<Props> = ({ data }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  const { text } = data;

  return (
    <Box position={"relative"} width={"fit-content"} zIndex={1}>
      <Typography
        variant={mdUp ? "h2" : "h4"}
        fontWeight={700}
        component={"h1"}
      >
        {text}
      </Typography>
      <Box
        width={"100%"}
        height={mdUp ? 8 : 5}
        bgcolor={"secondary.main"}
        position={"absolute"}
        left={0}
        bottom={0}
        zIndex={-1}
      />
    </Box>
  );
};

export default HeroTitle;
