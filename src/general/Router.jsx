import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";
import { Home } from "../home/Home.jsx";
import { DemoLead } from "../pages/DemoLead.jsx";
import NotFound from "../pages/NotFound.jsx";

export const Router = () => (
  <Routes>
    <Route path={RoutePaths.HOME} element={<Home />} />
    <Route path={RoutePaths.DEMOLEAD} element={<DemoLead />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
