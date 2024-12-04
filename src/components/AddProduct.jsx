import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function AddProduct() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const {
      name,
      description,
      price,
      stock,
      category,
      outstanding,
      slug,
      ingredients,
    } = data;

    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/products/store`,

      data: {
        name,
        description,
        price,
        stock,
        category,
        outstanding,
        slug,
        ingredients: ingredients.toString(),
        image,
      },
      headers: {
        Authorization: `Bearer ${userData.token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return setMsg(response.data);
  };

  const userData = useSelector((state) => state.user);
  const [msg, setMsg] = useState("");
  const [image, setImage] = useState({});

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center  ">
          <div className="border p-4 rounded shadow">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-center">Añadir producto</h1>
              <div className="mt-5 d-flex">
                <div>
                  <label htmlFor="name">Nombre</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    required
                    {...register("name")}
                  />
                  <label htmlFor="name" className="mt-2">
                    Descripción
                  </label>
                  <textarea
                    className="form-control"
                    name="description"
                    id="description"
                    {...register("description")}
                  ></textarea>
                  <label htmlFor="image" className="mt-3">
                    Imagen
                  </label>
                  <input
                    name="image"
                    className="form-control"
                    type="file"
                    required
                    onChange={(event) => setImage(event.target.files[0])}
                  />
                  <label htmlFor="price" className="mt-2">
                    Precio
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    name="price"
                    id="price"
                    required
                    {...register("price")}
                  />
                  <div className="d-flex align-items-center mt-5">
                    <button className="btn btn-success w-50  ">
                      Añadir producto
                    </button>
                    <span className="text-success ms-3">{msg}</span>
                  </div>
                </div>

                <div className="ms-4">
                  <label htmlFor="stock" className="">
                    Existencias
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    name="stock"
                    id="stock"
                    required
                    {...register("stock")}
                  />
                  <label htmlFor="category" className="mt-2">
                    Categoria
                  </label>
                  <select
                    className="form-control"
                    name="category"
                    id="category"
                    defaultValue={"juices"}
                    {...register("category")}
                  >
                    <option value="bars">Barras</option>
                    <option value="juices">Jugos</option>
                  </select>
                  <label htmlFor="outstanding" className="mt-2">
                    Destacado
                  </label>
                  <select
                    className="form-control"
                    name="outstanding"
                    id="outstanding"
                    {...register("outstanding")}
                  >
                    <option value="true">Verdadero</option>
                    <option value="false">Falso</option>
                  </select>
                  <label htmlFor="slug" className="mt-2">
                    Slug
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="slug"
                    id="slug"
                    {...register("slug")}
                  />

                  <span className="mt-2">Ingredientes</span>
                  <div className="form-check mt-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="tomato"
                      name="tomato"
                      value="tomate"
                      {...register("ingredients")}
                    />
                    <label htmlFor="tomato" className="form-check-label">
                      Tomate
                    </label>{" "}
                  </div>

                  <div className="form-check mt-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id=""
                      name="carrot"
                      value="zanahoria"
                      {...register("ingredients")}
                    />
                    <label className="form-check-label" htmlFor="carrot">
                      Zanahoria
                    </label>
                  </div>

                  <div className="form-check mt-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="apple"
                      name="apple"
                      value="manzana"
                      {...register("ingredients")}
                    />
                    <label className="form-check-label" htmlFor="apple">
                      Manzana
                    </label>
                  </div>
                  <div className="form-check mt-2">
                    <input
                      type="checkbox"
                      id="orange"
                      name="orange"
                      value="naranja"
                      className="form-check-input"
                      {...register("ingredients")}
                    />
                    <label className="form-check-label" htmlFor="orange">
                      Naranja
                    </label>
                  </div>
                </div>
              </div>{" "}
            </form>
            <Link to="/productos" className="mt-4 btn border">
              <i className="bi bi-arrow-left fs-5"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
