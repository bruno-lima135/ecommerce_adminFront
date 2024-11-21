import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/orders`,
      });
      setOrders(response.data);
    }
    getOrders();
  }, []);

  return (
    <>
      <div className="container container-orders">
        <h1 className="mt-2 mb-5">Ordenes</h1>

        <div className="">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Comprador</th>
                <th>Precio total</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {orders &&
                orders.map((order) => (
                  <tr key={order.id}>
                    <th>{order.id}</th>
                    <th>{order.buyer}</th>
                    <th>$ {order.totalPrice}</th>
                    <th>{order.state}</th>
                    <th>
                      <button className="btn btn-secondary">
                        Editar estado
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

export default Orders;
