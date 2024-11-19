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
      <Link to="/products">Go back</Link>
      <div>
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
          <label htmlFor="name">Description</label>
          <textarea
            onChange={handleChange}
            className="form-control"
            name="description"
            id="description"
          ></textarea>
          <label htmlFor="image">Image</label>
          <input className="form-control" type="file" />
          <label htmlFor="price">Price</label>
          <input
            className="form-control"
            type="number"
            name="price"
            id="price"
            onChange={handleChange}
          />
          <label htmlFor="stock">Stock</label>
          <input
            className="form-control"
            type="number"
            name="stock"
            id="stock"
            onChange={handleChange}
          />
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            name="category"
            id="category"
            onChange={handleChange}
          >
            <option value="bars">Bars</option>
            <option value="juices">Juices</option>
          </select>
          <label htmlFor="outstanding">Outstanding</label>
          <select
            className="form-control"
            name="outstanding"
            id="outstanding"
            onChange={handleChange}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <label htmlFor="slug">Slug</label>
          <input
            className="form-control"
            type="text"
            name="slug"
            id="slug"
            onChange={handleChange}
          />
          ingredients
          <input type="checkbox" id="tomato" name="tomato" value="tomate" />
          <label htmlFor="tomato">Tomato</label>
          <input type="checkbox" id="" name="carrot" value="zanahoria" />
          <label htmlFor="carrot">Carrot</label>
          <input type="checkbox" id="apple" name="apple" value="manzana" />
          <label htmlFor="apple">Apple</label>
          <input type="checkbox" id="orange" name="orange" value="naranja" />
          <label htmlFor="orange">Orange</label>
          <input type="checkbox" id="celery" name="celery" value="apio" />
          <label htmlFor="celery">Celery</label>
          <button>Add Product</button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
