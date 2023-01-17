import { Routes, Route, Link } from "react-router-dom";
import About from "./page1/About";
import Home from "./page1/Home";
import Product from "./page1/Product";
import Profile from "./page1/Profile";

function App1() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Profile />}>
          <Route path=":name" />
        </Route>
      </Routes>
    </>
  );
}

export default App1;
