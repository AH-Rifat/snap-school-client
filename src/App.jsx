import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./shared/Header";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import Footer from "./shared/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <Header />
        <Outlet />
        <Footer />
      </StyledEngineProvider>
    </>
  );
}

export default App;
