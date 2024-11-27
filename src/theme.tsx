"use client";

import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import { Cairo, Roboto } from "next/font/google";
import localFont from "next/font/local";

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

export const englishFont = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const localEnglishFont = localFont({
  src: [
    {
      path: "fonts/Roboto/Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "fonts/Roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/Roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
export const arabicFont = Cairo({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const localArabicFont = localFont({
  src: [
    {
      path: "fonts/Tajawal/Tajawal-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "fonts/Tajawal/Tajawal-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Tajawal/Tajawal-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/Tajawal/Tajawal-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const theme = (palette: PaletteOptions, direction: TDirection) =>
  createTheme({
    palette,
    direction,
    typography: {
      fontFamily:
        direction === Directions.LTR
          ? process.env.NODE_ENV === "development"
            ? localEnglishFont.style.fontFamily
            : englishFont.style.fontFamily
          : process.env.NODE_ENV === "development"
          ? localArabicFont.style.fontFamily
          : arabicFont.style.fontFamily,
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

  const cache =
    locale === Languages.ENGLISH
      ? createCache({ key: "mui" })
      : createCache({
          key: "mui-rtl",
          stylisPlugins: [prefixer, rtlPlugin],
        });

  return (
    <CacheProvider value={cache}>
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
    </CacheProvider>
  );
};

export default Theme;
