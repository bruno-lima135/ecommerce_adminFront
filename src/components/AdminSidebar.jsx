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
      <div className="d-flex flex-column sidebar align-items-center">
        <Link to={`${import.meta.env.VITE_CUSTOMER_URL}`}>
          <img
            src="./images/vibracowhite.png"
            className="w-75 d-flex ms-4 "
            alt=""
          />
        </Link>
        <div className="links d-column ">
          <Link to={"/"} className="mt-4 sideName title d-block">
            <i className="bi bi-house"></i>
            <span> Panel</span>
          </Link>
          <Link to={"/products"} className=" sideName d-block">
            <i className="bi bi-archive"></i> Productos{" "}
          </Link>
          <Link to={"/users"} className=" sideName d-block">
            <i className="bi bi-person"></i> Usuarios
          </Link>
          <Link to={"/orders"} className=" sideName d-block">
            <i className="bi bi-cart-check"></i> Ordenes
          </Link>
        </div>

        <div className="btn-container">
          <div className="btn-logout-login">
            {token.token ? (
              <button
                onClick={handleLogout}
                className="btn btn-log text-white text "
              >
                Cerrar sesión
              </button>
            ) : (
              <Link to={"/login"} className="btn text-white text btn-log">
                Iniciar sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
