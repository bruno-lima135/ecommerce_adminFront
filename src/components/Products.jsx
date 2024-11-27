import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Products() {
  const [products, setProducts] = useState([]);
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    async function getProducts() {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3003/products/juices",
        headers: { Authorization: `Bearer ${userData.token}` },
      });

      setProducts(response.data);
    }
    getProducts();
  }, []);

  async function handleDestroy(productId) {
    const response = await axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_URL}/products/destroy/${productId}`,
      headers: { Authorization: `Bearer ${userData.token}` },
    });
    setProducts(response.data);
  }

  return (
    <>
      <div className="d-flex container">
        <h1 className="mt-2">Productos</h1>

        <Link to={"/products/addProduct"} className="ms-auto mt-5 ">
          <i class="bi bi-plus-circle fs-2 add-btn"></i>
        </Link>
      </div>
      <div className="container">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <th>{product.name}</th>
                  <th>$ {product.price}</th>
                  <th>{product.stock}</th>
                  <th>
                    <Link
                      to={`/products/edit/${product.id}`}
                      className=" btn bg-warning"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={(event) => handleDestroy(product.id)}
                      className="ms-1 btn btn-secondary"
                    >
                      Eliminar
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Products;
