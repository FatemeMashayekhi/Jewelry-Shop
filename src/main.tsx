import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import MainLayout from "./layouts/mainLayout/MainLayout.tsx";
import Grouping from "./pages/Grouping.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import Cart from "./pages/Cart.tsx";
import Orders from "./pages/Orders.tsx";
import Login from "./pages/Login.tsx";
import SecondaryLayout from "./layouts/secondaryLayout/SecondaryLayout.tsx";
import ProductsManagement from "./pages/ProductsManagement.tsx";
import Inventory from "./pages/Inventory.tsx";
import OrdersManagement from "./pages/OrdersManagement.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "grouped",
        element: <Grouping />,
      },
      {
        path: "details",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/management",
    element: <SecondaryLayout />,
    children: [
      {
        index: true,
        element: <ProductsManagement />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "orders",
        element: <OrdersManagement />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
