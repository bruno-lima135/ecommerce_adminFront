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
    <div className="main-container ">
      <div>
        <form action="" onSubmit={(event) => handleLogin(event)}>
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            id="name"
            value={email}
            onChange={(event) => handleChangeEmail(event)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => handleChangePassword(event)}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
