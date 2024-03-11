import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../src/sections/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout/>} />
    </Routes>
  </Router>
  )
}

export default App;
