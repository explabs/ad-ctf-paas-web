import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "styles/theme";
import { SnackbarProvider } from "notistack";
import axios from "axios";
import getConfig from "next/config";
import { Provider } from "react-redux";
import store from "../src/store";
import Auth from "../src/features/auth/Auth";

// import '../styles/styles.scss';

const { publicRuntimeConfig } = getConfig();

axios.defaults.baseURL = 'http://api.potee.local/';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Auth>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider
            maxSnack={5}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Component {...pageProps} />
          </SnackbarProvider>
        </ThemeProvider>
      </Auth>
    </Provider>
  );
}

export default App;
