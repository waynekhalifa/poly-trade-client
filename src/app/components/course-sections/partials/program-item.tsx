import { Box, IconButton, Typography } from "@mui/material";
import { StickyNote2Outlined } from "@mui/icons-material";

import { MD_UP_PARAMS } from "@/app/constants/media-queries";
import useResponsive from "@/app/hooks/useResponsive";

interface Props {
  data: any;
}

const ProgramItem: React.FC<Props> = ({ data }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  return (
    <Box
      position={"relative"}
      pl={8}
      mb={3}
      sx={{ "&:last-of-type": { mb: 0 } }}
    >
      <IconButton
        sx={{
          position: "absolute",
          left: 0,
          top: "54%",
          transform: "translateY(-50%)",
          bgcolor: "common.black",
          color: "common.white",
          borderRadius: 0,
          height: 48,
          "&:hover": {
            bgcolor: "common.black",
            color: "common.white",
          },
        }}
      >
        <StickyNote2Outlined />
      </IconButton>
      <Typography variant={mdUp ? "h6" : "body1"} fontWeight={700}>
        {data.title}
      </Typography>
      <Typography variant={mdUp ? "body1" : "body2"}>
        {data.description}
      </Typography>
    </Box>
  );
};

export default ProgramItem;
