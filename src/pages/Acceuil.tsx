import React from "react";
import HeaderComponent from "../components/templates/header/HeaderComponent";
import { ThemeProvider } from "styled-components";
import theme from "../components/templates/header/stylesheet";
const Acceuil = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <HeaderComponent />
      </ThemeProvider>
    </div>
  );
};

export default Acceuil;
