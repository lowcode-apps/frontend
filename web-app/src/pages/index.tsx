import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignIn from "./SignIn";
import Blog from "./Blog/Blog";
import Dashboard from "./Dashboard";
import Pricing from "./Pricing";
import Products from "./Products";
import SignUp from "./SignUp";
import ShoppingCart from "./ShoppingCart";
import Calendar from "./Calendar";
import Map from "./Map";

// Sample components for different routes
const Home = () => <div>
  <nav>
    <ul>
      <li>
        <Link to="/sign-in">Signin</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/blog">blog</Link>
      </li> <li>
        <Link to="/dashboard">dashboard</Link>
      </li> <li>
        <Link to="/pricing">pricing</Link>
      </li> <li>
        <Link to="/products">products</Link>
      </li>
      <li>
        <Link to="/sign-up">sign-up</Link>
      </li>

    </ul>
  </nav>
</div>;
const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;

function App() {
  return (
    <Router>
      <div>

        <li>
          <Link to="/home">Home</Link>
        </li>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/about" element={<About />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/map" element={<Map />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
