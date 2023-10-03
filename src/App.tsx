import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#36846d",
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Body />
    </ThemeProvider>
  );
}

export default App;
