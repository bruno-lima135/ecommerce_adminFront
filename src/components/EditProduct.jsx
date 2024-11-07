import React from "react";
import { Link } from "react-router-dom";

function EditProduct() {
  return (
    <>
      <div>
        <h1>Edit product :ID...</h1>
        <Link to={"/products"}>Go back</Link>
      </div>

      <div>
        <form action="" method="post">
          <label htmlFor="name">Name</label>
          <input className="form-control" type="text" name="name" id="name" />
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            name="description"
            id="description"
          ></textarea>
          <label htmlFor="image">Image</label>
          <input className="form-control" type="file" name="image" id="image" />
          <label htmlFor="price">Price</label>
          <input
            className="form-control"
            type="number"
            name="price"
            id="price"
          />
          <label htmlFor="stock">Stock</label>
          <input className="form-control" type="number" />
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
          <button>Edit</button>
        </form>
      </div>
    </>
  );
}

export default EditProduct;
