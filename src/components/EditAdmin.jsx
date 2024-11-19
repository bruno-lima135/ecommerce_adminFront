import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function EditUser() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state) => state.user);
  const params = useParams();
  const [msg, setMsg] = useState("");

  useEffect(() => {
    async function getAdmin() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/admins/show/${params.userId}`,
      });

      const { firstname, lastname, email, password } = response.data;
      setFirstName(firstname);
      setLastName(lastname);
      setEmail(email);
    }
    getAdmin();
  }, []);

  async function handleEditAdmin(event) {
    event.preventDefault();

    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/admins/edit/${params.userId} `,
      data: { firstname, lastname, email, password },
      headers: { Authorization: `Bearer ${token.token}` },
    });

    setMsg(response.data);
  }

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="shadow rounded border p-5">
          <h1>Edit User Admin</h1>

          <form action="" onSubmit={(event) => handleEditAdmin(event)}>
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
            />
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <button className="mt-4 w-100 btn btn-success">Save Changes</button>
          </form>
          <Link to={"/users"} className="btn border mt-4">
            Go back
          </Link>
          <p className="text-success">{msg}</p>
        </div>
      </div>
    </>
  );
}

export default EditUser;
