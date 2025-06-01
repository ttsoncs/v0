"use client"

import { ThemeProvider as StyledThemeProvider } from "styled-components"

const theme = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    gray: {
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    purple: {
      400: "#a855f7",
    },
    pink: {
      400: "#f472b6",
    },
    microsoft: {
      red: "#F25022",
      green: "#7FBA00",
      blue: "#00A4EF",
      yellow: "#FFB900",
    },
    pitch: "#7557FF",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  spacing: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
  },
  fontWeights: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
}

export function ThemeProvider({ children }) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}
