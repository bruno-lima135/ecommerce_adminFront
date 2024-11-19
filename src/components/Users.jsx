import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Users() {
  const [usersData, setUsersData] = useState([]);
  const token = useSelector((state) => state.user);

  useEffect(() => {
    async function getUsers() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/admins`,
      });

      setUsersData(response.data);
    }

    getUsers();
  }, []);

  async function handleDestroy(adminId) {
    const response = await axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_API_URL}/admins/destroy/${adminId}`,
      headers: { Authorization: `Bearer ${token.token}` },
    });
    setUsersData(response.data);
  }

  return (
    <>
      <div>
        <div className="d-flex">
          <h3 className="mt-3 mb-3">Users</h3>
          <Link
            className="ms-auto me-5 fs-5 mt-4 btn border"
            to={"/users/addUser"}
          >
            Add User
          </Link>
        </div>

        <table className="table table-striped ">
          <thead>
            <tr>
              <th>Id</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersData &&
              usersData.map((user) => (
                <tr key={user.id}>
                  <th>{user.id}</th>
                  <th>{user.firstname}</th>
                  <th>{user.lastname}</th>
                  <th>{user.email}</th>

                  <th>
                    <Link
                      to={`/users/${user.id}`}
                      className="btn btn-primary m-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDestroy(user.id)}
                      className=" btn btn-secondary "
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
