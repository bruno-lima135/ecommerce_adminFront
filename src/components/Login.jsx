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
    console.log(response.data);
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
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="form-login-container border p-5 shadow rounded ">
        <h1>Login Admin</h1>
        <form action="" onSubmit={(event) => handleLogin(event)}>
          <label htmlFor="email" className="">
            email
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
            Password
          </label>
          <input
            className="form-control mt-2"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => handleChangePassword(event)}
          />
          <button className="btn btn-success w-100 mt-4">Login</button>
          <p className="text-danger mt-4">{msg}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
