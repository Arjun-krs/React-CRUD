import { useEffect, useState } from "react";
import axios from "axios";
import "../Crud/read.scss";

function Read() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_WEB_URL}/RedexData`)
      .then((res) => setUsers(res.data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <p className="mt-4 fs-1 fw-bold">DETAILS</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Password</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Read;