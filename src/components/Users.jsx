import React from "react";
import { Link } from "react-router-dom";

function Users() {
  return (
    <>
      <div>
        <div className="d-flex">
          <h3 className="mt-3 mb-3">Users</h3>
          <Link className="ms-auto me-5 fs-5 " to={"/users/addUser"}>
            Add User
          </Link>
        </div>

        <table className="table table-striped ">
          <thead>
            <tr>
              <th>Id</th>
              <th>Avatar</th>
              <th>Full name</th>
              <th>Email</th>
              <th>Administrator</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Lorem ipsum dolor sit.</th>
              <th>Lorem ipsum dolor sit.</th>
              <th>Lorem ipsum dolor sit.</th>

              <th>Lorem ipsum dolor sit.</th>
              <th>Lorem ipsum dolor sit.</th>
              <th>
                <Link to={"/users/:userId"}>Edit</Link>
                <Link to={"/users"}>Delete</Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
