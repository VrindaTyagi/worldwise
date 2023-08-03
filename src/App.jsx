import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Home from "./pages/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Login from "./pages/Login.jsx";
import AppLayout from "./pages/AppLayout.jsx";

export default function App() {
  //here goes the html that you want to always stay on the website, the routes below will change the views according to routes
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
