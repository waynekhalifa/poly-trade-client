"use client";

import { Alert, Snackbar } from "@mui/material";

import useSnackbarStore from "@/store/snackbar";
import { Modals } from "@/enums/modals";
import { TSnackbar, emptySnackbar } from "@/types/snackbar";

const MainSnackbar: React.FC = () => {
  const snackbar: TSnackbar = useSnackbarStore((state) => state.snackbar);
  const setSnackbar = useSnackbarStore((state) => state.setSnackbar);

  const { persist, severity, content } = snackbar;

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      autoHideDuration={persist ? null : severity === "success" ? 3000 : 6000}
      open={snackbar.type !== Modals.EMPTY}
      onClose={() => setSnackbar(emptySnackbar)}
    >
      <Alert
        onClose={() => setSnackbar(emptySnackbar)}
        elevation={6}
        variant="filled"
        severity={severity}
        sx={{ width: "100%" }}
      >
        {content}
      </Alert>
    </Snackbar>
  );
};

export default MainSnackbar;
