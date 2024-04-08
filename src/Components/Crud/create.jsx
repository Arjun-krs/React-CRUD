import React, { useState } from "react";
import axios from "axios";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Crud/create.scss";

function Create() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(form);
  };

  const addPost = (formData) => {
    axios
      .post(`${import.meta.env.VITE_API_WEB_URL}/Profile`, formData)
      .then((response) => {
        setPosts([response.data, ...posts]);
        setForm({
          name: "",
          email: "",
          password: "",
          address: "",
        });
      })
      .catch((error) => {
        console.error("Error adding post:", error);
      });
  };

  const handleChange = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <>
      <p className="mt-4 fs-1 fw-bold">INPUT DETAILS</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={(e) => handleChange(e, "name")}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your E-mail"
            value={form.email}
            onChange={(e) => handleChange(e, "email")}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter Your Password"
            value={form.password}
            onChange={(e) => handleChange(e, "password")}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Address"
            value={form.address}
            onChange={(e) => handleChange(e, "address")}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Create;
