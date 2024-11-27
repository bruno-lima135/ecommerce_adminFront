import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import AdminSidebar from "./components/AdminSidebar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <AdminSidebar />
        </div>

        <div className="col-md-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
