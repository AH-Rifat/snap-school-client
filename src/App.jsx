import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./shared/Header";
import { CssBaseline } from "@mui/material";
import Footer from "./shared/Footer";

function App() {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");

  return (
    <>
      <CssBaseline />
      {noHeaderFooter || <Header />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </>
  );
}

export default App;
