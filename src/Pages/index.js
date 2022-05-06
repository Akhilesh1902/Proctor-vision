import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Dash from "./Dash";
import Login from "./Login";
import Settings from "./Settings";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path={"/dash/:userName"} element={<Dash />} />
      <Route path="/dash/:userName/settings" element={<Settings />} />
    </Routes>
  );
};

export default index;
