"use client";

import { Roboto } from "next/font/google";
import {
  PaletteOptions,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { TDirection } from "./models/direction";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { Directions } from "./enums/directions";

export const font = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = (palette: PaletteOptions, direction: TDirection) =>
  createTheme({
    palette,
    direction,
    typography: {
      fontFamily: font.style.fontFamily,
    },
    shape: {
      borderRadius: 0,
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          contained: {
            textTransform: "none",
          },
          outlined: {
            textTransform: "none",
          },
          text: { textTransform: "none" },
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          disableElevation: true,
        },
      },
    },
  });

interface Props {
  paletteData: any;
  children: React.ReactNode;
}

const Theme: React.FC<Props> = ({ paletteData, children }) => {
  const { mode, background, common, secondary, primary } = paletteData;

  const palette: PaletteOptions = {
    mode,
    primary,
    secondary,
    background,
    common,
  };

  return (
    <ThemeProvider theme={responsiveFontSizes(theme(palette, Directions.LTR))}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          img: { display: "block", maxWidth: "100%", height: "auto" },
          video: { display: "block" },
          ".swiper-wrapper": { maxHeight: "100vh" },
          // svg: { animation: "spin 4s infinite linear" },
          "@keyframes spin": {
            from: {
              transform: "rotate(0deg)",
            },
            to: {
              transform: "rotate(360deg)",
            },
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
