import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./shared/Header";
import { CssBaseline } from "@mui/material";
import Footer from "./shared/Footer";
import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

function App() {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {noHeaderFooter || <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}
        <Outlet />
        {noHeaderFooter || <Footer isDarkMode={isDarkMode} />}
      </ThemeProvider>
    </>
  );
}

export default App;
