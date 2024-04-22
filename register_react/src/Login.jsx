import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("log in");

  const handleLogin = async (event) => {
    console.log(`mail : ${mail} pass ${password}`);
    event.preventDefault();

    const response = await axios.post("http://localhost:5000/login", {
      mail,
      password,
    });
    setmessage(response.data.message);
    setmail("");
    setpassword("");
    console.log("Login Success:", response.data);
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        Mail Id ::
        <input
          type="text"
          name="mail"
          onChange={(e) => {
            setmail(e.target.value);
          }}
        />{" "}
        <br />
        password:
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />{" "}
        <br />
        <input type="submit" value="login" />
      </form>
      <p>{message}</p> <br />
      <Link to={"/Register"}>Register here</Link>
    </>
  );
}

export default Login;
