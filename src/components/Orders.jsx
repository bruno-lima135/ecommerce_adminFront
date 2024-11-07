import React from "react";

function Orders() {
  return (
    <>
      <div>
        <h1>Orders</h1>
      </div>

      <div className="">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>User</th>
              <th>Total price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>Lorem ipsum dolor sit amet.</th>
              <th>Lorem ipsum dolor sit amet.</th>
              <th>Lorem ipsum dolor sit amet.</th>
              <th>Lorem ipsum dolor sit amet.</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Orders;
