import React, { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";

export const Router = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
