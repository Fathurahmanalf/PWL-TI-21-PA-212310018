import React from "react";
import { Routes, Route } from "react-router-dom";
import ChapterOne from "../module/ChapterOne";


export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<ChapterOne />} />
        <Route path="home" element={<Home />} />
        <Route path="PWL" element={<PWL />} />
      </Routes>
    </React.Suspense>
  );
}

const Home = () => {
  return <h3>Ini home looo…</h3>;
};

const PWL = () => {
    return <h3 className="mx-3">BrowserRouter: komponen di library react-router-dom yang digunakan untuk menangani routing di aplikasi web yang dibuat dengan React. Routing di sini berarti proses menentukan apa yang ditampilkan kepada pengguna berdasarkan URL di browser, yang sangat penting dalam pembuatan Single Page Applications (SPA).<br/>
    Sumber: https://v5.reactrouter.com/web/api/BrowserRouter 
    </h3>;
  };
