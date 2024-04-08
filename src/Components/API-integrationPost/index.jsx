import { useState } from "react";
import axios from "axios";
import "../API-integrationPost/style.scss";

function Post(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [occupation, setOccupation] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ name, email, address, phone, occupation });
  };

  const addPost = (postData) => {
    axios
      .post("https://6610d6310640280f219d7acc.mockapi.io/Profile", postData)
      .then((response) => {
        setPosts([response.data, ...posts]);
      })
      .catch((error) => {
        console.error("Error adding post:", error);
      });
    setName("");
    setEmail("");
    setAddress("");
    setPhone("");
    setOccupation("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-field">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-field">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="input-field">
        <input
          type="tel"
          placeholder="Enter phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="Enter occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
      </div>
      <button className="submit-button" type="submit" onClick={postData}>
        Submit
      </button>
    </form>
  );
};

export default Post;
