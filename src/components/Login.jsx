import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveUserData } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function handleLogin(event) {
    event.preventDefault();

    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/tokens/admin`,
      data: { email, password },
    });
    if (!response.data.token) return setMsg(response.data);

    dispatch(
      saveUserData({ token: response.data.token, userId: response.data.userId })
    );

    navigate("/");
  }

  async function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  async function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="mt-5 login-container d-flex justify-content-center align-items-center flex-column">
      <div className="form-login-container border p-5 shadow rounded ">
        <h1>Iniciar sesión</h1>
        <form action="" onSubmit={(event) => handleLogin(event)}>
          <label htmlFor="email" className="">
            Correo
          </label>
          <input
            className="form-control mt-2"
            type="text"
            name="email"
            id="name"
            value={email}
            onChange={(event) => handleChangeEmail(event)}
          />

          <label htmlFor="password" className="mt-2">
            Contraseña
          </label>
          <input
            className="form-control mt-2"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => handleChangePassword(event)}
          />
          <button className="btn btn-success w-100 mt-4">Ingresar</button>
          <p className="text-danger mt-4">{msg}</p>
        </form>
      </div>

      <div className="mt-5">
        <p className="fw-bold m-0">Iniciar sesión como administrador</p>
        <ul className="list-credentials">
          <li>E-mail: admin@a.com.</li>
          <li>Contraseña: 1234.</li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
