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
      <div className="container container-users h-100">
        <div className="d-flex">
          <h1 className="mt-3 mb-3">Usuarios</h1>
          <Link className="ms-auto fs-5 mt-4 " to={"/users/addUser"}>
            <i class="bi bi-plus-circle fs-2 text-black"></i>
          </Link>
        </div>

        <table className="table table-striped ">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Acciones</th>
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
                    <Link to={`/users/${user.id}`} className="btn btn-primary">
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDestroy(user.id)}
                      className=" ms-1 btn btn-secondary "
                    >
                      Eliminar
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
