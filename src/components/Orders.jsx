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
      <div>
        <h1 className="d-flex justify-content-center mt-5 mb-5">Orders</h1>
      </div>

      <div className="">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Buyer</th>
              <th>Total price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {orders &&
              orders.map((order) => (
                <tr key={order.id}>
                  <th>{order.id}</th>
                  <th>{order.buyer}</th>
                  <th>{order.totalPrice}</th>
                  <th>{order.state}</th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Orders;
