import "../assets/styles/fonts.css";
import "./main.scss";
// 스타일

import Logo from "./Logo";
import HeaderNav from "../components/HeaderNav";
import HeaderGnb from "../components/HeaderGnb";
import HeaderIconBar from "../components/HeaderIconBar";
import Footer from "./Footer";
import styled from "styled-components";
import MainSlider from "./MainSlider";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";

const Container = styled.div`
  width: 80%;
  height: 14vh;
  margin: 0 auto 1vh;

  display: grid;
  grid-template: repeat(1fr, 1fr) / repeat(20%, 60%, 20%);
  .mainslider {
    margin-bottom: 100px;
  }
`;

function Main() {
  return (
    <div>
      <Logo />
      <HeaderNav />
      <HeaderGnb />
      <HeaderIconBar />
      <MainSlider />
      {/* <Section1 /> */}
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
