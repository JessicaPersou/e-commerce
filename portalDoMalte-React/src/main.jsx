import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import Login from "../src/Pages/Login";
import Register from "../src/Pages/Register";
import History from "../src/Pages/History";
import Styles from "../src/Pages/Styles";
import AdminUsers from "../src/Pages/AdminUsers";
import "./styles/global.css";
import Products from "./Pages/Products";
import ProductDetailPage from "../src/Pages/ProductDetailPage";
import ShoppingCart from "./Pages/ShoppingCart";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/styles" element={<Styles />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/admin/users" element={<AdminUsers />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
