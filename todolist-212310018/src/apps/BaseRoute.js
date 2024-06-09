import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../component/Dashboard";
import Input from "../widget/input";




export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
      <Route path="dashboard" element={<Dashboard/>} />
        <Route path="input" element={<Input />} />
      </Routes>
    </React.Suspense>
  );
}



