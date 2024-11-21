import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

function Dashboard() {
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
      <div className="main-container ">
        <div className="content-container container ">
          <span>
            <img src="" alt="" />
          </span>

          <h2 className="d-flex justify-content-center m-4">
            Panel de administración
          </h2>
          <h6 className="d-flex justify-content-center  m-4">
            Últimos 30 días
          </h6>

          <div className="cards-container   container">
            <div className="row">
              <div className="col-4">
                <div>
                  <Card className="">
                    <Card.Body>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-bag fs-2"></i>
                        <div className="ms-3">
                          <Card.Title>Ventas mensuales (USD)</Card.Title>
                          <Card.Text className="card-text ">450.980</Card.Text>
                        </div>
                      </div>
                    </Card.Body>
                    <Card.Footer>View All</Card.Footer>
                  </Card>
                </div>
              </div>
              <div className="col-4">
                <div className="">
                  <Card className="">
                    <Card.Body>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-envelope-open fs-2"></i>
                        <div className="ms-3">
                          <Card.Title>Ratio de conversión </Card.Title>
                          <Card.Text className="card-text">19.16%</Card.Text>
                        </div>
                      </div>
                    </Card.Body>
                    <Card.Footer> View All</Card.Footer>
                  </Card>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <Card className="">
                    <Card.Body>
                      <div className="d-flex align-items-center">
                        <i class="bi bi-cursor fs-2 p"></i>
                        <div className="ms-3">
                          <Card.Title>Ratio de clicks promedio </Card.Title>
                          <Card.Text className="card-text">24.57</Card.Text>
                        </div>
                      </div>
                    </Card.Body>
                    <Card.Footer> View All</Card.Footer>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <h5 className="d-flex justify-content-center m-4">
            Últimas 10 órdenes
          </h5>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th>Id</th>
                <th>Comprador</th>
                <th>Precio total</th>
                <th>Estado</th>
                <th>Acción</th>
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
                      <button className="btn border bg-secondary text-white">
                        Cambiar estado
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

export default Dashboard;
