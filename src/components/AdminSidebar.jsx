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
    navigate("/registrarse");
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
          <Link to={"/productos"} className=" sideName d-block">
            <i className="bi bi-archive"></i> Productos{" "}
          </Link>
          <Link to={"/usuarios"} className=" sideName d-block">
            <i className="bi bi-person"></i> Usuarios
          </Link>
          <Link to={"/ordenes"} className=" sideName d-block">
            <i className="bi bi-cart-check"></i> Órdenes
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
              <Link to={"/registrarse"} className="btn text-white text btn-log">
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
