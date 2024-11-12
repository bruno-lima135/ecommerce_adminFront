import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3003/products/juices",
      });

      setProducts(response.data);
    }
    getProducts();
  }, []);

  async function handleDestroy(productId) {
    return await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_URL}/products/destroy/${productId}`,
    });
  }

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
            {products.map((product) => (
              <tr key={product.id}>
                <th>{product.name}</th>
                <th>{product.price}</th>
                <th>{product.stock}</th>
                <th>
                  {" "}
                  <Link to={`/products/edit/${product.id}`}>Edit </Link>{" "}
                  <button onClick={(event) => handleDestroy(product.id)}>
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;
