import { TSeverity } from "../types/severity";
import { TSnackbar } from "../types/snackbar";

export const createSnackbarResponse = (
  content: React.ReactNode,
  severity: TSeverity
): TSnackbar => {
  const response: TSnackbar = {
    anchor: "bottom",
    type: "response",
    title: "",
    content,
    severity,
    persist: false,
  };

  return response;
};
