import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import Login from "../src/Pages/Login";
import Register from "../src/Pages/Register";
import AdminUsers from "../src/Pages/AdminUsers";
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login/register" element={<Register/>} />
        <Route path="/admin/users" element={<AdminUsers/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// aonde ficam as rotas