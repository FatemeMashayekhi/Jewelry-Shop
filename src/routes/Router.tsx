import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/mainLayout/MainLayout";
import Grouping from "../pages/Grouping";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import Login from "../pages/Login";
import SecondaryLayout from "../layouts/secondaryLayout/SecondaryLayout";
import ProductsManagement from "../pages/ProductsManagement";
import Inventory from "../pages/Inventory";
import OrdersManagement from "../pages/OrdersManagement";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="grouped" element={<Grouping />} />
          <Route path="details" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="/login" element={<Login />} />

        <Route path="/management" element={<SecondaryLayout />}>
          <Route index element={<ProductsManagement />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="orders" element={<OrdersManagement />} />
        </Route>
      </Routes>
    </>
  );
}
