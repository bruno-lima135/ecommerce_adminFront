import React from "react";
import { Link } from "react-router-dom";
function AddUser() {
  return (
    <>
      <div>
        <h1>Add User</h1>
        <Link to={"/"}>Go back</Link>
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
          <input className="form-control" type="text" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
          />
          <label htmlFor="role"></label>
          <select name="role" id="role">
            <option value="1">customer</option>
            <option value="2">Admin</option>
          </select>
          <button>Create</button>
        </form>
      </div>
    </>
  );
}

export default AddUser;
