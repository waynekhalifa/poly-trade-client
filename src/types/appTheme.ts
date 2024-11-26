import { PaletteOptions, Theme } from "@mui/material";
import { Directions } from "../enums/directions";

export type TAppTheme = (
  palette: PaletteOptions,
  direction: Directions
) => Theme;
