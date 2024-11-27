import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Users from "./components/Users.jsx";
import Products from "./components/Products.jsx";
import Orders from "./components/Orders.jsx";
import EditProduct from "./components/EditProduct.jsx";
import AddProduct from "./components/AddProduct.jsx";
import AddUser from "./components/AddAdmin.jsx";
import EditUser from "./components/EditAdmin.jsx";
import Login from "./components/Login.jsx";
import store from "./redux/storeConfig.js";
import StateEdit from "./components/StateEdit.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  { path: "/", element: <Login /> },
  { path: "/orders/edit/:orderId", element: <StateEdit /> },
  { path: "/products/edit/:productId", element: <EditProduct /> },
  { path: "/products/addProduct", element: <AddProduct /> },
  { path: "/users/addUser", element: <AddUser /> },
  { path: "/users/:userId", element: <EditUser /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <ToastContainer />
  </StrictMode>
);
