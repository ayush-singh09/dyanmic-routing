import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";
import About from "../pages/About";
import UserInfo from "../pages/UserInfo";

function Routing() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/user" element={<About />} />
      <Route path="/user" element={<User />} />

      <Route path="/user/:username" element={<UserInfo />} />

      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Routing;
