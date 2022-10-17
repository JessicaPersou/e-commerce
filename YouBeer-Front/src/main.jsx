import React from 'react'
import ReactDOM from 'react-dom/client'
import { User } from "../src/components/User/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/usuarios" element={User} />
    </Routes>
  </BrowserRouter>
)
