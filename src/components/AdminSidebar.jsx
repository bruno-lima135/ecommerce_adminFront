import React from "react";
import { Link } from "react-router-dom";
function AdminSidebar() {
  return (
    <>
      <div className="d-flex flex-column sidebar vh-100">
        <Link to={"/"} className="m-2 sideName">Dashboard</Link>
        <Link to={"/products"}  className="m-2 sideName" >Products</Link>
        <Link to={"/users"} className="m-2 sideName" >Users</Link>
        <Link to={"/orders"} className="m-2 sideName">Orders</Link>
      </div>
    </>
  );
}

export default AdminSidebar;
