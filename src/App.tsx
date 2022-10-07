import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header/Header";
import  Index from "./pages/Index";
import { Card } from "./components/Cards/Card";
import { Footer } from "./components/Footer/Footer";
import "./styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
