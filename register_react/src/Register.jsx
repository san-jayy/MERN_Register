import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("no status");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:5000/register", {
      name,
      mail,
      password,
    });
    setmessage(response.data.message);
    setname("");
    setmail("");
    setpassword("");
    console.log("Success:", response.data);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        username :
        <input
          type="text"
          name="username"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />
        user mail:{" "}
        <input
          type="text"
          name="email"
          value={mail}
          onChange={(e) => {
            setmail(e.target.value);
          }}
        />
        <br />
        password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <br />
        <input type="submit" name="submit" />
        <br />
      </form>
      <p>{message}</p>
      <Link to={"/"}> login </Link>
    </div>
  );
}

export default Register;
