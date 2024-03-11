import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../src/sections/Layout";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Layout} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
