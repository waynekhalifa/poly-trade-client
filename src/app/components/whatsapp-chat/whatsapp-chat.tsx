"use client";

import { IconButton } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import LinkWrap from "../link-wrap";

const WhatsAppChat: React.FC = () => {
  return (
    <LinkWrap href="https://api.whatsapp.com/send?phone=+249123420900" blank>
      <IconButton
        size="large"
        id="whatsapp-chat"
        disableRipple
        disableFocusRipple
        sx={{
          position: "fixed",
          bgcolor: "primary.main",
          bottom: "4%",
          left: "2%",
          zIndex: 999,
          color: "common.white",
          p: 2,
          "&:hover": { bgcolor: "primary.main" },
        }}
      >
        <WhatsApp sx={{ transform: "scale(1.1)" }} />
      </IconButton>
    </LinkWrap>
  );
};

export default WhatsAppChat;
