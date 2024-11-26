import { TSeverity } from "./severity";

export type TSnackbarType = "" | "response";

export type TSnackbarAnchor = "top" | "right" | "bottom" | "left";

export type TSnackbar = {
  anchor?: TSnackbarAnchor;
  severity: TSeverity;
  type: TSnackbarType;
  title?: string;
  content: React.ReactNode;
  persist: boolean;
};

export const emptySnackbar: TSnackbar = {
  anchor: "bottom",
  type: "",
  title: "",
  content: null,
  severity: "success",
  persist: false,
};
