import { FC } from "react";
import { Provider } from "react-redux";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import { CssBaseline, ThemeProvider } from "@mui/material";

import store from "./store/store";

import { primaryTheme } from "src/shared/themes";
import AppRouter from "src/app/routing/AppRouter";

if (import.meta.env.MODE === "production") {
  disableReactDevTools();
}

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={primaryTheme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
