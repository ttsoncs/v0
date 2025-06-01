import StyledComponentsRegistry from "./styled-components-registry"
import { ThemeProvider } from "./theme-provider"
import GlobalStyles from "./global-styles"
import localFont from "next/font/local"

const wotfard = localFont({
  src: [
    { path: "/fonts/wotfard-regular-webfont.woff2", weight: "400", style: "normal" },
    { path: "/fonts/wotfard-medium-webfont.woff2", weight: "500", style: "normal" },
    { path: "/fonts/wotfard-semibold-webfont.woff2", weight: "600", style: "normal" },
  ],
  display: "fallback",
  preload: false,
})

export const metadata = {
  title: "Son Trinh - Portfolio",
  description: "Portfolio of Son Trinh, C++ Engineer",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={wotfard.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}


import './globals.css'