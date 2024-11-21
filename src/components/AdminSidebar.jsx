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
      <div className="d-flex flex-column  sidebar  ">
        <img
          src="./images/vibracowhite.png"
          className="w-75 d-flex ms-4 "
          alt=""
        />

        <Link to={"/"} className="mt-4 sideName title ">
          <i className="bi bi-house"></i>
          <span> Panel</span>
        </Link>
        <Link to={"/products"} className=" sideName">
          <i className="bi bi-archive"></i> Productos{" "}
        </Link>
        <Link to={"/users"} className=" sideName">
          <i className="bi bi-person"></i> Usuarios
        </Link>
        <Link to={"/orders"} className=" sideName">
          <i className="bi bi-cart-check"></i> Ordenes
        </Link>

        <div className="text-center ">
          {token.token ? (
            <button onClick={handleLogout} className="btn-logout text ">
              Cerrar sesión
            </button>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-secondary w-50 text-white text"
            >
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
