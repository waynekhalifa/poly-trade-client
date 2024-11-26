import { Box } from "@mui/material";
import { memo } from "react";

interface Props {
  fileUrl: string;
  upLoadFile: (clientHeight: number, clientWidth: number) => void;
}

const Preview: React.FC<Props> = ({ fileUrl, upLoadFile }) => {
  return (
    <Box
      sx={{
        visibility: "hidden",
        pointerEvents: "none",
        position: "fixed",
        zIndex: "-1",
      }}
    >
      <Box
        component="img"
        src={fileUrl}
        sx={{ display: "block", maxWidth: "100%", height: "auto" }}
        onLoad={(e: any) =>
          upLoadFile(e.target.clientHeight, e.target.clientWidth)
        }
      />
    </Box>
  );
};

export default memo(Preview);
