import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Acceuil from "../pages/Acceuil";
import Authentification from "../pages/Authentification";
const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/authentification" element={<Authentification />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
