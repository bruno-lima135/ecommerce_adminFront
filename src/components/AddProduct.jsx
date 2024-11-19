import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

function AddProduct() {
  const userData = useSelector((state) => state.user);

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
    return await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/products/store`,
      data: { formData },
      headers: { Authorization: `Bearer ${userData.token}` },
    });
  }

  return (
    <>
      <div className="d-flex justify-content-center mt-5 ">
        <div className=" border shadow rounded p-5">
          <h1>Add product</h1>
          <form
            action=""
            method="post"
            onSubmit={(event) => handleAddProduct(event)}
          >
            <label htmlFor="name">name</label>
            <input
              className="form-control"
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
            />
            <label htmlFor="name" className="mt-2">
              Description
            </label>
            <textarea
              onChange={handleChange}
              className="form-control"
              name="description"
              id="description"
            ></textarea>
            <label htmlFor="image" className="mt-3">
              Image
            </label>
            <input className="form-control" type="file" />
            <label htmlFor="price" className="mt-3">
              Price
            </label>
            <input
              className="form-control"
              type="number"
              name="price"
              id="price"
              onChange={handleChange}
            />
            <label htmlFor="stock" className="mt-2">
              Stock
            </label>
            <input
              className="form-control"
              type="number"
              name="stock"
              id="stock"
              onChange={handleChange}
            />
            <label htmlFor="category" className="mt-2">
              Category
            </label>
            <select
              className="form-control"
              name="category"
              id="category"
              onChange={handleChange}
            >
              <option value="bars">Bars</option>
              <option value="juices">Juices</option>
            </select>
            <label htmlFor="outstanding" className="mt-2">
              Outstanding
            </label>
            <select
              className="form-control"
              name="outstanding"
              id="outstanding"
              onChange={handleChange}
            >
              <option value="true">True</option>
              <option value="false">False</option>
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
            <span className="mt-2">Ingredients</span>
            <div className="form-check mt-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="tomato"
                name="tomato"
                value="tomate"
              />
              <label htmlFor="tomato" className="form-check-label">
                Tomato
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
                Carrot
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
                Apple
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
                Orange
              </label>
            </div>
            <div className="form-check mt-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="celery"
                name="celery"
                value="apio"
              />
              <label className="form-check-label" htmlFor="celery">
                Celery
              </label>
            </div>
            <button className="mt-4 w-100 btn btn-success">Add Product</button>
          </form>
          <Link to="/products" className="mt-4 btn border">
            Go back
          </Link>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
