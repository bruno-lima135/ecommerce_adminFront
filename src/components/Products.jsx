import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <div className="d-flex">
        <h1>Products</h1>

        <Link to={"/products/addProduct"} className="ms-auto me-5">
          Add product
        </Link>
      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Lorem ipsum dolor sit amet.</th>
              <th>Lorem ipsum dolor sit amet.</th>
              <th>Lorem ipsum dolor sit amet.</th>
              <th>
                <Link to={"/products/:productId"}>Edit </Link>{" "}
                <Link to={"/products"}>Delete </Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;
