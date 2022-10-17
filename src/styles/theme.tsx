import { ReactNode } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";

interface Props {
  children: ReactNode;
}

export type Theme = {
  brand: string;
  white: string;
  gray_one: string;
  gray_two: string;
  gray_three: string;
  blue: string;
  dark_blue: string;
  dark_green: string;
  yellow: string;
  dark_yellow: string;
  success: string;
  info: string;
  error: string;
  warning: string;
};

const ThemeColors: Theme = {
  brand: "#345ab0",
  white: "#fff",
  gray_one: "#666",
  gray_two: "#3e3e3e",
  gray_three: "#474747",
  blue: "#1253a0",
  dark_blue: "#071b66",
  dark_green: "#076633",
  yellow: "#cda50a",
  dark_yellow: "#b1680a",
  success: "#5de135",
  info: "#2DA5BE",
  error: "#f23528",
  warning: "#f2da28",
};

export default function AppTheme({ children }: Props) {
  return (
    <ThemeProvider theme={ThemeColors}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
