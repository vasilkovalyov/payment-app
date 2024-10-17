import { FC } from "react";

import { ThemeProvider } from "@mui/material";

import { primaryTheme } from "src/shared/themes";
import AppRouter from "src/app/routing/AppRouter";

const App: FC = () => {
  return (
    <ThemeProvider theme={primaryTheme}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
