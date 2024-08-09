import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";
import { Home } from "../home/Home.jsx";
import { Contactanos } from "../pages/Contactanos.jsx";
import NotFound from "../pages/NotFound.jsx";
import Nosotros from "../pages/Nosotros.jsx";
import Maintenance from "../pages/Maintenance.jsx";

export const Router = () => (
  <Routes>
    <Route path={RoutePaths.HOME} element={<Home />} />
    <Route path={RoutePaths.NOSOTROS} element={<Nosotros />} />
    <Route path={RoutePaths.CONTACTANOS} element={<Contactanos />} />
    <Route path={RoutePaths.MAINTENANCE} element={<Maintenance />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
