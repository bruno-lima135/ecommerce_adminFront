import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

function EditProduct() {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    async function getProduct() {
      const response = await axios({
        method: "GET",
        url: ` ${import.meta.env.VITE_API_URL}/products/show/${
          params.productId
        }`,
      });
      setProduct(response.data);
    }

    getProduct();
  }, []);

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

  async function handleChange(event) {
    const inputName = event.target.name;
    const value = event.target.value;

    setFormData((prev) => {
      return { ...prev, [inputName]: value };
    });
  }

  async function handleEditProduct(event) {
    event.preventDefault();
    return await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/products/edit/${params.productId}`,
      data: { formData },
    });
  }

  return (
    <>
      <div>
        <h1>Edit product :ID...</h1>
        <Link to={"/products"}>Go back</Link>
      </div>

      <div>
        <form
          action=""
          method="post"
          onSubmit={(event) => handleEditProduct(event)}
        >
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            name="description"
            id="description"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="image">Image</label>
          <input className="form-control" type="file" name="image" id="image" />
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
            <option value="60ml">Shot</option>
            <option value="330ml">330ml</option>
            <option value="500ml">500ml</option>
          </select>
          <label htmlFor="outstanding">Outstanding</label>
          <select className="form-control" name="outstanding" id="outstanding">
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
          <button>Edit</button>
        </form>
      </div>
    </>
  );
}

export default EditProduct;
