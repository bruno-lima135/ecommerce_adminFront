import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useForm } from "react-hook-form";

function EditUser() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
          <h1>Editar usuario</h1>

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstname">Nombre</label>
            <input
              className="form-control"
              type="text"
              name="firstname"
              id="firstname"
              {...register("firstname")}
            />

            <label htmlFor="lastname">Apellido</label>
            <input
              className="form-control"
              type="text"
              name="lastname"
              id="lastname"
              {...register("lastname")}
            />

            <label htmlFor="email">Correo</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              {...register("email")}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              {...register("password")}
            />

            <button className="mt-4 w-100 btn btn-success">
              Guardar cambios
            </button>
          </form>
          <Link to={"/usuarios"} className="btn border mt-4">
            <i className="bi bi-arrow-left fs-5"></i>
          </Link>
          <p className="text-success">{msg}</p>
        </div>
      </div>
    </>
  );
}

export default EditUser;
