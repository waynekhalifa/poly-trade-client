"use client";
import { Cairo, Roboto } from "next/font/google";
import {
  PaletteOptions,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { TDirection } from "./models/direction";
import { Locale } from "./types/locale";
import { Directions } from "./enums/directions";
import { Languages } from "./enums/languages";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const cairo = Cairo({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = (palette: PaletteOptions, direction: TDirection) =>
  createTheme({
    palette,
    direction,
    typography: {
      fontFamily:
        direction === Directions.LTR
          ? roboto.style.fontFamily
          : cairo.style.fontFamily,
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
  locale: Locale;
  children: React.ReactNode;
}

const Theme: React.FC<Props> = ({ paletteData, locale, children }) => {
  const { mode, background, common, secondary, primary } = paletteData;

  const palette: PaletteOptions = {
    mode,
    primary,
    secondary,
    background,
    common,
  };

  return (
    <ThemeProvider
      theme={responsiveFontSizes(
        theme(
          palette,
          locale === Languages.ENGLISH ? Directions.LTR : Directions.RTL
        )
      )}
    >
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
