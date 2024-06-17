"use client";
import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";

import useModalStore from "@/app/store/modal";
import { Modals } from "@/app/enums/modals";
import { TModal, emptyModal } from "@/app/types/modal";
import { Close } from "@mui/icons-material";

const MainModal: React.FC = () => {
  const modal: TModal = useModalStore((state) => state.modal);
  const setModal = useModalStore((state) => state.setModal);

  return (
    <Drawer
      sx={{ position: "relative", zIndex: (theme) => theme.zIndex.drawer + 2 }}
      variant="persistent"
      anchor={modal.anchor}
      open={modal.type !== Modals.EMPTY}
      onClose={() => setModal(emptyModal)}
      PaperProps={{
        sx: { bgcolor: "rgba(0,0,0,.1)", width: 1, height: "100vh" },
      }}
    >
      <Box
        sx={{
          width: "96%",
          position: "relative",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          bgcolor: "common.white",
        }}
      >
        <Grid
          container
          justifyContent={"space-between"}
          alignItems="center"
          borderBottom={"1px solid"}
          borderColor={"divider"}
          p={2}
        >
          <Typography>{modal.title}</Typography>
          <IconButton
            edge="end"
            sx={{ "&:hover": { bgcolor: "transparent" } }}
            onClick={() => setModal(emptyModal)}
          >
            <Close />
          </IconButton>
        </Grid>
        <Box p={2} minHeight={"calc(100vh - 112px)"}>
          {modal.content}
        </Box>
      </Box>
    </Drawer>
  );
};

export default MainModal;
