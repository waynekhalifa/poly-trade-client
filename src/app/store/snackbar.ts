import { TSnackbar, emptySnackbar } from "./../types/snackbar";
import { create } from "zustand";

type State = {
  snackbar: TSnackbar;
};

type Actions = {
  setSnackbar: (payload: TSnackbar) => void;
};

const useSnackbarStore = create<State & Actions>((set) => ({
  snackbar: emptySnackbar,
  setSnackbar: (payload: TSnackbar) =>
    set((state) => ({ ...state, snackbar: payload })),
}));

export default useSnackbarStore;
