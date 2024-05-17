import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");

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
    console.log(response.data);
  };
  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          style={styles.input}
          placeholder="Email"
          name="mail"
          onChange={(e) => {
            setmail(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          style={styles.input}
          placeholder="Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />{" "}
        <br />
        <input type="submit" value="login" style={styles.submit} />
      </form>
      <br />
      <p style={styles.text}>{message}</p> <br />
      <Link to={"/Register"} style={styles.link}>
        Register here
      </Link>
    </div>
  );
}

export default Login;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    width: "200px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  submit: {
    margin: "10px 0",
    padding: "10px",
    width: "220px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
  },
  text: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#333",
  },
  link: {
    marginTop: "10px",
    color: "#007BFF",
    textDecoration: "none",
  },
};
