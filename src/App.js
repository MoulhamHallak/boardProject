import React from "react";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import MainBoard from "./components/MainBoard";
import Completed from "./components/Completed";
import NavBar from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

export function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route path="/Completed" component={Completed} />
        <Route path="/MainBoard" component={MainBoard} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/About" component={About} />
        <Route path="/" component={Footer} />
      </Router>
    </div>
  );
}

export default App;
