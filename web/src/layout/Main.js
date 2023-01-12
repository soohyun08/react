import "../assets/styles/fonts.css";
import "./main.scss";

import Logo from "./Logo";
import HeaderNav from "../components/HeaderNav";
import HeaderGnb from "../components/HeaderGnb";
import HeaderIconBar from "../components/HeaderIconBar";
import Footer from "./Footer";

import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";

function Main() {
  return (
    <div className="main">
      <HeaderNav />
      <Logo />
      <HeaderGnb />
      <HeaderIconBar />

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />

      <Footer />
    </div>
  );
}

export default Main;
