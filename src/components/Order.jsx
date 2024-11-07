import React from "react";

function Order() {
  return (
    <>
      <div>
        <h1>Order</h1>
        <div>
          <p>Order placed</p>
          <span>November 7,2024</span>
        </div>

        <div className="orders-container">
          <div className="row">
            <div className="col-2">imagen de producto</div>
            <div className="col-4">
              {" "}
              <h4>Kinto day of summer</h4>
              <span>$38</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                voluptate placeat corrupti? Ducimus illum eligendi delectus
                tempore odio numquam a laborum laudantium neque officiis id
                minus sapiente enim, aliquid nostrum.
              </p>
            </div>
            <div className="col-3">
              <span>Delivery adress</span>
              <p>direccion enrique segoviano</p>
            </div>
            <div className="col-3">
              <span>Shipping updates</span>
              <p>mail generico</p>
            </div>
          </div>
          <hr />
          <div>
            <span>preparing to ship on...</span>
            <p>barra de ordenes</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
