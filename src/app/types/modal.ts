export type TModalType = "" | "crop-modal";

export type TModalAnchor = "top" | "right" | "bottom" | "left";

export type TModal = {
  anchor: TModalAnchor;
  type: TModalType;
  title: string;
  content: React.ReactNode;
};

export const emptyModal: TModal = {
  anchor: "bottom",
  type: "",
  title: "",
  content: null,
};
