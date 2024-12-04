import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useSelector } from "react-redux";

function Dashboard() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const token = useSelector((state) => state.user);

  if (!token.token) navigate("/registrarse");

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
          <table className="table ">
            <thead>
              <tr>
                <th>Id</th>
                <th>Comprador</th>
                <th>Nombre y apellido</th>
                <th>Precio total</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order) => (
                  <tr key={order.id}>
                    <th className="fw-normal">{order.id}</th>
                    <th className="fw-normal">{order.buyer}</th>
                    <th className="fw-normal">{order.buyerName}</th>

                    <th className="fw-normal">$U {order.totalPrice}</th>
                    <th className="fw-normal">{order.state}</th>
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
