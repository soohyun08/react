import { Form, Link, NavLink } from "react-router-dom";
import "./nav.scss";
import logo from "../assets/images/Interior.png";
import {
  BsGoogle,
  BsGlobe,
  BsGear,
  BsGithub,
  BsMegaphone,
} from "react-icons/bs";

function onDeco({ isActive }) {
  return {
    textDecoration: isActive && "underline",
  };
}

function Nav() {
  const path = process.env.PUBLIC_URL;
  return (
    <>
      <Link to="/">
        <img src={logo} alt="로고" />
      </Link>
      <ul className="globalNavBar">
        <li>
          {/* NavLink는 boolean의 값을 가진 isActive 존재 */}
          <NavLink to="/about" style={onDeco}>
            <BsGoogle />
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" style={onDeco}>
            <BsGear />
            Service
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" style={onDeco}>
            <BsGlobe />
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/board" style={onDeco}>
            <BsGithub />
            Board
          </NavLink>
        </li>
        <li>
          <NavLink to="/userUtill" style={onDeco}>
            <BsMegaphone />
            로그인
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Nav;
