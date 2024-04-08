import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Profile;
