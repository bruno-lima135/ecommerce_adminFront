import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

function AddProduct() {
  const userData = useSelector((state) => state.user);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: Number,
    stock: Number,
    category: "",
    outstanding: false,
    slug: "",
    ingredients: [],
  });

  const handleChange = (event) => {
    const inputName = event.target.name;
    const value = event.target.value;
    setFormData((prev) => {
      return { ...prev, [inputName]: value };
    });
  };

  async function handleAddProduct(event) {
    event.preventDefault();
    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/products/store`,
      data: { formData },
      headers: { Authorization: `Bearer ${userData.token}` },
    });

    return setMsg(response.data);
  }

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center  ">
          <div className="border p-4 rounded shadow">
            <form method="post" onSubmit={(event) => handleAddProduct(event)}>
              <h1 className="text-center">Añadir producto</h1>
              <div className="mt-5 d-flex">
                <div>
                  <label htmlFor="name">Nombre</label>
                  <input
                    className="form-control"
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                    required
                  />
                  <label htmlFor="name" className="mt-2">
                    Descripción
                  </label>
                  <textarea
                    onChange={handleChange}
                    className="form-control"
                    name="description"
                    id="description"
                  ></textarea>
                  <label htmlFor="image" className="mt-3">
                    Imagen
                  </label>
                  <input className="form-control" type="file" />{" "}
                  <label htmlFor="price" className="mt-2">
                    Precio
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    name="price"
                    id="price"
                    onChange={handleChange}
                    required
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
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="category" className="mt-2">
                    Categoria
                  </label>
                  <select
                    className="form-control"
                    name="category"
                    id="category"
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                  <span className="mt-2">Ingredientes</span>
                  <div className="form-check mt-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="tomato"
                      name="tomato"
                      value="tomate"
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
                    />
                    <label className="form-check-label" htmlFor="orange">
                      Naranja
                    </label>
                  </div>
                </div>
              </div>{" "}
            </form>
            <Link to="/products" className="mt-4 btn border">
              <i class="bi bi-arrow-left fs-5"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
