import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Student from "./pages/Student/Student";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/Student" element={<Student />}>
        <Route path=""></Route>
      </Route>
      <Route path="/Admin" element={<Admin />}></Route>
    </Routes>
  );
}

export default App;
