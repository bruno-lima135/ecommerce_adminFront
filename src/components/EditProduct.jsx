import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function EditProduct() {
  const userData = useSelector((state) => state.user);
  const params = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    category: "juices",
    outstanding: false,
    slug: "",
  });

  useEffect(() => {
    async function getProduct() {
      const response = await axios({
        method: "GET",
        url: ` ${import.meta.env.VITE_API_URL}/products/show/${
          params.productId
        }`,
        headers: { Authorization: `Bearer ${userData.token}` },
      });
      const { name, description, price, stock, category, outstanding, slug } =
        response.data;
      setFormData({
        ...formData,
        name,
        description,
        price,
        stock,
        category,
        outstanding,
        slug,
      });
    }
    getProduct();
  }, []);

  async function handleChange(event) {
    const inputName = event.target.name;
    const value = event.target.value;

    setFormData((prev) => {
      return { ...prev, [inputName]: value };
    });
  }

  async function handleEditProduct(event) {
    event.preventDefault();
    await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/products/edit/${params.productId}`,
      data: { formData },
      headers: { Authorization: `Bearer ${userData.token}` },
    });

    return navigate("/products");
  }
  return (
    <>
      <div className="d-flex justify-content-center mt-5 ">
        <div className=" border shadow rounded p-5">
          <h1>Editar producto</h1>
          <form
            action=""
            method="post"
            onSubmit={(event) => handleEditProduct(event)}
          >
            <label htmlFor="name">Nombre</label>
            <input
              className="form-control"
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              value={formData.name}
            />
            <label htmlFor="name" className="mt-2">
              Descripción
            </label>
            <textarea
              onChange={handleChange}
              className="form-control"
              name="description"
              id="description"
              value={formData.description}
            ></textarea>
            <label htmlFor="image" className="mt-3">
              Imagen
            </label>
            <input className="form-control" type="file" />
            <label htmlFor="price" className="mt-3">
              Precio
            </label>
            <input
              className="form-control"
              type="number"
              name="price"
              id="price"
              onChange={handleChange}
              value={formData.price}
            />
            <label htmlFor="stock" className="mt-2">
              Existencias
            </label>
            <input
              className="form-control"
              type="number"
              name="stock"
              id="stock"
              onChange={handleChange}
              value={formData.stock}
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
              value={formData.slug}
            />

            <button className="mt-4 w-100 btn btn-success">
              Guardar cambios
            </button>
          </form>
          <Link to="/products" className="mt-4 btn border">
            <i class="bi bi-arrow-left fs-5"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
