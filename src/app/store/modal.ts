import { TModal, emptyModal } from "./../types/modal";
import { create } from "zustand";

export type TSeverity = "success" | "error" | "warning" | "info";

type State = {
  modal: TModal;
};

type Actions = {
  setModal: (payload: TModal) => void;
};

const useModalStore = create<State & Actions>((set) => ({
  modal: emptyModal,
  setModal: (payload: TModal) => set((state) => ({ ...state, modal: payload })),
}));

export default useModalStore;
