import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function AddUser() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state) => state.user);
  const [msg, setMsg] = useState("");

  async function handleAddAdmin(event) {
    event.preventDefault();
    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/admins/store`,
      data: { firstname, lastname, email, password },
      headers: { Authorization: `Bearer ${token.token}` },
    });
    setEmail("");
    setPassword("");
    return setMsg(response.data);
  }

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="rounded shadow border p-5">
          <h1>Add User Admin</h1>

          <form action="" onSubmit={(event) => handleAddAdmin(event)}>
            <label htmlFor="firstname">Firstname</label>
            <input
              className="form-control"
              type="text"
              name="firstname"
              id="firstname"
              value={firstname}
              onChange={(event) => setFirstName(event.target.value)}
            />

            <label htmlFor="lastname">Lastname</label>
            <input
              className="form-control"
              type="text"
              name="lastname"
              id="lastname"
              value={lastname}
              onChange={(event) => setLastName(event.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <button className="btn btn-success mt-4 w-100">Create</button>
          </form>
          <Link to={"/users"} className="mt-4 btn  border">
            Go back
          </Link>
          <p className="text-success">{msg}</p>
        </div>
      </div>
    </>
  );
}

export default AddUser;
