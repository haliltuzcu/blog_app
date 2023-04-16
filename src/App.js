import { createTheme, ThemeProvider } from "@mui/material";
import AppRouter from "./routes/AppRouter";
import { blueGrey, grey, green } from "@mui/material/colors";
import { Provider } from "react-redux";
import store from "./app/store";


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: green["200"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  })
  return (
    <>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    </ThemeProvider>
    </>
  );
}

export default App;
