import React from "react";

function Users() {
  return (
    <>
      <div>
        <div className="d-flex">
          <h3>Users</h3>
          <button className="btn ms-auto">Add user</button>
        </div>

        <table className="table table-striped">
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
              <th>Edit</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
