"use client";

import { IconButton } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

const ScrollTop: React.FC = () => {
  return (
    <IconButton
      id="scroll-top"
      disableRipple
      disableFocusRipple
      sx={{
        position: "fixed",
        bgcolor: "#333",
        bottom: 0,
        zIndex: -1,
        right: "2%",
        color: "common.white",
        borderRadius: "4px 4px 0 0",
        width: 56,
        opacity: 0,
        transition: ".3s ease-in-out",
        "&:hover": { bgcolor: "primary.main" },
        "&.is-sticky": { zIndex: 999, opacity: 1 },
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <KeyboardArrowUp />
    </IconButton>
  );
};

export default ScrollTop;
