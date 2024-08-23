import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import AxiosService from "../utils/AxioService";
import ApiRoutes from "../utils/ApiRoutes";
import toast from "react-hot-toast";

function Home() {
  let [user, setUsers] = useState([]);

  const getData = async () => {
    try {
      let { message, users } = await AxiosService.get(
        ApiRoutes.GET_ALL_USER.path,
        { authenticate: ApiRoutes.GET_ALL_USER.auth }
      );
      toast.success(message);
      setUsers(users);
    } catch (error) {
      toast.error(error.message || "Internal Server Error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="homeSection">
      <div className="container">
        <div className="row">
          <div className="col">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {user.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{item.mobile}</td>
                      <td>{item.role}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
