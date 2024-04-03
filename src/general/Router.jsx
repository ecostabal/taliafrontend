import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";
import { Home } from "../home/Home.jsx";
import NotFound from "../pages/NotFound.jsx"; // Importa NotFound correctamente

export const Router = () => (
  <Routes>
    <Route path={RoutePaths.HOME} element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
