import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Users() {
  const [usersData, setUsersData] = useState([]);
  const token = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Id, setId] = useState(0);

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
    setUsersData(response.data);
  }

  function cleanInputs() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }
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

  async function getAdmin(adminId) {
    const response = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_URL}/admins/show/${adminId}}`,
      headers: { Authorization: `Bearer ${token.token}` },
    });

    const { id, firstname, lastname, email, password } = response.data;
    setId(id);
    setFirstName(firstname);
    setLastName(lastname);
    setEmail(email);
  }

  async function handleEditAdmin(event, adminId) {
    event.preventDefault();

    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/admins/edit/ `,
      data: { Id, firstname, lastname, email, password },
      headers: { Authorization: `Bearer ${token.token}` },
    });
    return setUsersData(response.data);
  }

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

          <Button
            className="ms-auto "
            variant=""
            onClick={() => {
              handleShow();
              cleanInputs();
            }}
          >
            <i class="bi bi-plus-circle fs-2 add-btn"></i>
          </Button>
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
            {console.log(usersData)}
            {usersData.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <th>{user.firstname}</th>
                <th>{user.lastname}</th>
                <th>{user.email}</th>

                <th>
                  <Button
                    className="btn btn-warning"
                    variant=""
                    onClick={() => {
                      setShow2(true);
                      getAdmin(user.id);
                    }}
                  >
                    Editar
                  </Button>

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
      <Modal show={show} handleClose={handleClose} handleShow={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" onSubmit={(event) => handleAddAdmin(event)}>
            <label htmlFor="firstname">Nombre</label>
            <input
              className="form-control"
              type="text"
              name="firstname"
              id="firstname"
              value={firstname}
              onChange={(event) => setFirstName(event.target.value)}
            />

            <label htmlFor="lastname">Apellido</label>
            <input
              className="form-control"
              type="text"
              name="lastname"
              id="lastname"
              value={lastname}
              onChange={(event) => setLastName(event.target.value)}
            />

            <label htmlFor="email">Correo</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <label htmlFor="password">Contraseña</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <button className="btn btn-success mt-4 w-100">Crear</button>
          </form>
        </Modal.Body>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Editar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" onSubmit={(event) => handleEditAdmin(event)}>
            <label htmlFor="firstname">Nombre</label>
            <input
              className="form-control"
              type="text"
              name="firstname"
              id="firstname"
              value={firstname}
              onChange={(event) => setFirstName(event.target.value)}
            />

            <label htmlFor="lastname">Apellido</label>
            <input
              className="form-control"
              type="text"
              name="lastname"
              id="lastname"
              value={lastname}
              onChange={(event) => setLastName(event.target.value)}
            />

            <label htmlFor="email">Correo</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <button className="mt-4 w-100 btn btn-success">
              Guardar cambios
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Users;
