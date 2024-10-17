import { FC } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { primaryTheme } from "src/shared/themes";
import AppRouter from "src/app/routing/AppRouter";

const App: FC = () => {
  return (
    <ThemeProvider theme={primaryTheme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
