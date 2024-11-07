import React from "react";
import { Link } from "react-router-dom";

function AddProduct() {
  return (
    <>
      <div>
        <h1>Add Product</h1>
      </div>

      <Link to="/products">Go back</Link>
      <div>
        <form action="">
          <label htmlFor="name">name</label>
          <input className="form-control" type="text" name="name" id="name" />
          <label htmlFor="name">Description</label>
          <textarea
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
          />
          <label htmlFor="stock">Stock</label>
          <input
            className="form-control"
            type="number"
            name="stock"
            id="stock"
          />
          <label htmlFor="category">Category</label>
          <select className="form-control" name="category" id="category">
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
          <input className="form-control" type="text" name="slug" id="slug" />
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
