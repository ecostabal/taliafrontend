import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";
import { Home } from "../home/Home.jsx";
import { DemoLead } from "../pages/DemoLead.jsx";
import NotFound from "../pages/NotFound.jsx";
import Sociedades from "../pages/Sociedades.jsx";

export const Router = () => (
  <Routes>
    <Route path={RoutePaths.HOME} element={<Home />} />
    <Route path={RoutePaths.SOCIEDADES} element={<Sociedades />} />
    <Route path={RoutePaths.DEMOLEAD} element={<DemoLead />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
