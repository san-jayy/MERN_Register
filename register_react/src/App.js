import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

export default App;
