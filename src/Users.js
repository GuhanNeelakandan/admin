import React, { useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import UserContext from './UserContext';
function Users() {
  let user=useParams()
      const userContext=useContext(UserContext)
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">User List</h1>
        <Link to={"/user-create"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Emply ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Emply ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {userContext.users.map((user) => {
                  return <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.position}</td>
                    <td>{user.office}</td>
                    <td>{user.age}</td>
                    <td>{user.startDate}</td>
                    <td>{user.salary}</td>
                    <td><Link to={`/user-view/${user.id}`} class="btn btn-warning btn-sm">View</Link>
                    <Link to={`/user-edit/${user.id}`} class="btn btn-primary btn-sm">edit</Link>
                      <button class="btn btn-danger btn-sm">Delete</button></td>
                  </tr>
                })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  );
}

export default Users;
