import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Users from "./components/Users.jsx";
import Products from "./components/Products.jsx";
import Orders from "./components/Orders.jsx";
import Order from "./components/Order.jsx";
import EditProduct from "./components/EditProduct.jsx";
import AddProduct from "./components/AddProduct.jsx";
import AddUser from "./components/AddUser.jsx";
import EditUser from "./components/EditUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/users", element: <Users /> },
      { path: "/products", element: <Products /> },
      { path: "/Orders", element: <Orders /> },
    ],
  },
  { path: "/orders/:orderId", element: <Order /> },
  { path: "/products/:productId", element: <EditProduct /> },
  { path: "/products/addProduct", element: <AddProduct /> },
  { path: "/users/addUser", element: <AddUser /> },
  { path: "/users/:userId", element: <EditUser /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
