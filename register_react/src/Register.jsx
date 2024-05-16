import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");

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
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="username"
          value={name}
          style={styles.input}
          placeholder="Username"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />

        <input
          type="text"
          name="email"
          value={mail}
          placeholder="Email"
          style={styles.input}
          onChange={(e) => {
            setmail(e.target.value);
          }}
        />
        <br />

        <input
          type="password"
          name="password"
          value={password}
          style={styles.input}
          placeholder="Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <br />
        <input type="submit" name="submit" style={styles.submit} />
        <br />
      </form>
      <br />
      <p style={styles.text}>{message}</p>
      <Link to={"/"} style={styles.link}>
        Already Registerd? login here.
      </Link>
    </div>
  );
}

export default Register;

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
