import { useEffect, useState } from "react";
import axios from "axios";

function Update() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`${import.meta.env.VITE_API_WEB_URL}/Profile`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        setError("Error fetching data");
        console.error("Error fetching data: ", error);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_WEB_URL}/Profile/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        setError("Error deleting user");
        console.error("Error deleting user: ", error);
      });
  };

  const onUpdate = (id, newData) => {
    axios
      .put(`${import.meta.env.VITE_API_WEB_URL}/Profile/${id}`, newData)
      .then(() => {
        getData();
      })
      .catch((error) => {
        setError("Error updating user");
        console.error("Error updating user: ", error);
      });
  };

  const handleChange = (index, field, value) => {
    const updatedUsers = [...users];
    updatedUsers[index][field] = value;
    setUsers(updatedUsers);
  };

  const handleUpdate = (id, index) => {
    const updatedUser = users[index];
    onUpdate(id, updatedUser);
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <p className="mt-4 fs-1 fw-bold">WHAT TO UPDATE OR DELETE??</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Password</th>
            <th>Address</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={user.email}
                  onChange={(e) => handleChange(index, "email", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={user.password}
                  onChange={(e) =>
                    handleChange(index, "password", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={user.address}
                  onChange={(e) =>
                    handleChange(index, "address", e.target.value)
                  }
                />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(user.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdate(user.id, index)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Update;
