import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import AdminSidebar from "./components/AdminSidebar";
import AdminBar from "./components/AdminBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="row">
        <div className="col">
          <AdminSidebar />
        </div>

        <div className="col">
          <AdminBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
