import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "./contexts";
import { Router } from "./routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppProvider>
          <Router />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
