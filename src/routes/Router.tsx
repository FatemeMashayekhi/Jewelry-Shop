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
import ProtectedRoute from "../components/protected-route/ProtectedRoute";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/grouping/:categoryId" element={<Grouping />} />
          <Route path="/:productId" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>
        <Route path="/login" element={<Login />} />

        <Route
          path="/management"
          element={
            <ProtectedRoute>
              <SecondaryLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<ProductsManagement />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="orders" element={<OrdersManagement />} />
        </Route>
      </Routes>
    </>
  );
}
