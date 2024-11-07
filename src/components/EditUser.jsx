import React from "react";
import { Link } from "react-router-dom";

function EditUser() {
  return (
    <>
      <div>
        <h1>Edit User Id:...</h1>
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
          <input className="form-control" type="text" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
          />
          <button>Save Changes</button>
        </form>
      </div>
    </>
  );
}

export default EditUser;
