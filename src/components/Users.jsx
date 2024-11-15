import React ,{useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Users() {
  const [data,setData]= useState();
  useEffect(()=>{
    fetch('http://localhost:3003/admin/show/1')
    .then((response)=>response.json())
    .then((json)=>setData(json))
  },[data])
  if(!data){
    return <div>Loading...</div>}
  return (
    <>
      <div>
        <div className="d-flex">
          <h3 className="mt-3 mb-3">Users</h3>
          <Link className="ms-auto me-5 fs-5 " to={"/users/addUser"}>
            Add User
          </Link>
        </div>

        <table className="table table-striped ">
          <thead>
            <tr>
              <th>Id</th>
              <th>Avatar</th>
              <th>Full name</th>
              <th>Email</th>
              <th>Administrator</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{data?.id}</th>
              <th>{data?.firstname}</th>
              <th>{data?.lastname}</th>

              <th>Lorem ipsum dolor sit.</th>
              <th>Lorem ipsum dolor sit.</th>
              <th>
                <Link to={"/users/:userId"}>Edit</Link>
                <Link to={"/users"}>Delete</Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
