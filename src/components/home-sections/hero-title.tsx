import { MD_UP_PARAMS } from "@/constants/media-queries";
import useResponsive from "@/hooks/useResponsive";
import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
}

const HeroTitle: React.FC<Props> = ({ title }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  return (
    <Box position={"relative"} width={"fit-content"} zIndex={1}>
      <Typography
        variant={mdUp ? "h2" : "h4"}
        fontWeight={700}
        component={"h1"}
      >
        {title}
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
