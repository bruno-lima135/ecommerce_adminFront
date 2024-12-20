import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [state, setState] = useState("");
  const [msg, setMsg] = useState("");
  useEffect(() => {
    async function getOrders() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/orders`,
      });
      setOrders(response.data);
    }
    getOrders();
  }, [msg]);

  async function handleChangeState(event, order) {
    event.preventDefault();
    if (order.state === "Entregado") {
      return toast.error("Estado entregado no puede modificarse");
    }

    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/orders/edit/${order.id}`,
      data: { state },
    });

    return toast.success("Estado cambiado");
  }

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
                      <form
                        action=""
                        onSubmit={(event) => handleChangeState(event, order)}
                      >
                        <div className="d-flex align-items-center ">
                          <label htmlFor="state"></label>
                          <select
                            disabled={
                              order.state === "Entregado" ? true : false
                            }
                            className="border-0 p-1 rounded"
                            name="state"
                            id="state"
                            onChange={(event) => setState(event.target.value)}
                          >
                            <option value="">Estado</option>
                            <option value="Pagado">Pagado</option>
                            <option value="En tránsito">En tránsito</option>
                            <option value="Entregado">Entregado</option>
                          </select>

                          <button
                            disabled={
                              order.state === "Entregado" ? true : false
                            }
                            className="btn btn-success ms-5"
                          >
                            Guardar cambios
                          </button>
                        </div>
                      </form>
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
