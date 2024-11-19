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
        <div className="">
          <div className="content-container ">
            <span>
              <img src="" alt="" />
            </span>

            <h2 className="d-flex justify-content-center m-4">Dashboard</h2>
            <h6 className="d-flex justify-content-center  m-4">Last 30 days</h6>

            <div className="cards-container d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Monthly Sales(USD)</Card.Title>
                  <Card.Text className="card-text">450.980</Card.Text>
                </Card.Body>
                <Card.Footer>View All</Card.Footer>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Conversion Rate</Card.Title>
                  <Card.Text>19.16%</Card.Text>
                </Card.Body>
                <Card.Footer> View All</Card.Footer>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Avg. Click Rate</Card.Title>
                  <Card.Text>24.57%</Card.Text>
                </Card.Body>
                <Card.Footer> View All</Card.Footer>
              </Card>
            </div>

            <h5 className="d-flex justify-content-center m-4">
              Last 10 orders
            </h5>
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Buyer</th>
                  <th>Total Price</th>
                  <th>Status</th>
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
        </div>
      </div>
    </>
  );
}

export default Dashboard;
