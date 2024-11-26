import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

function AddProduct() {
  const userData = useSelector((state) => state.user);
  const [msg, setMsg] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [image, setImage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: Number,
    stock: Number,
    category: "",
    outstanding: false,
    slug: "",
  });

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    }
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const value = event.target.value;
    setFormData((prev) => {
      return { ...prev, [inputName]: value };
    });
  };

  async function handleAddProduct(event) {
    event.preventDefault();
    const { name, description, price, stock, category, outstanding, slug } =
      formData;

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
        ingredients: selectedItems,
        image,
      },
      headers: {
        Authorization: `Bearer ${userData.token}`,
        "Content-Type": "multipart/form-data",
      },
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
                  <input
                    name="image"
                    className="form-control"
                    type="file"
                    onChange={(event) => setImage(e.target.files[0])}
                  />{" "}
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
                    defaultValue={"juices"}
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
                      onChange={handleCheckboxChange}
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
                      onChange={handleCheckboxChange}
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
                      onChange={handleCheckboxChange}
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
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="orange">
                      Naranja
                    </label>
                  </div>
                </div>
              </div>{" "}
            </form>
            <Link to="/products" className="mt-4 btn border">
              <i className="bi bi-arrow-left fs-5"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
