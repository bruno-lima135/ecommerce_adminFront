import React from "react";
import { Link } from "react-router-dom";
function AdminSidebar() {
  return (
    <>
      <div className="d-flex flex-column sidebar">
        <Link to={"/"}>Dashboard</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/orders"}>Orders</Link>
      </div>

      <Link to={"/"}>Return to website</Link>
    </>
  );
}

export default AdminSidebar;
