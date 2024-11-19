import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

function AdminSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user);

  async function handleLogout() {
    dispatch(logOut());
    navigate("/login");
  }

  return (
    <>
      <div className="d-flex flex-column  sidebar vh-100">
        <div className="w-100 text-center mt-3">
          {token.token ? (
            <button onClick={handleLogout} className="btn-logout ">
              LogOut
            </button>
          ) : (
            <Link to={"/login"} className="btn bg-secondary w-50 text-white ">
              Login
            </Link>
          )}
        </div>

        <Link to={"/"} className="m-2 sideName">
          Dashboard
        </Link>
        <Link to={"/products"} className="m-2 sideName">
          Products
        </Link>
        <Link to={"/users"} className="m-2 sideName">
          Users
        </Link>
        <Link to={"/orders"} className="m-2 sideName">
          Orders
        </Link>
      </div>
    </>
  );
}

export default AdminSidebar;
