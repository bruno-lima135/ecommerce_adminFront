import React from "react";
import { Link } from "react-router-dom";
function AddUser() {
  return (
    <>
      <div>
        <h1>Add User</h1>
        <Link to={"/users"}>Go back</Link>
      </div>

      <div>
        <form action="">
          <label htmlFor="firstname">Firstname</label>
          <input
            className="form-control"
            type="text"
            name="firstname"
            id="firstname"
          />

          <label htmlFor="lastname">Lastname</label>
          <input
            className="form-control"
            type="text"
            name="lastname"
            id="lastname"
          />

          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
          />

          <button>Create</button>
        </form>
      </div>
    </>
  );
}

export default AddUser;
