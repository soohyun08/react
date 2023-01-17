import React from "react";
import MainBanner from "../components/MainBanner";
import MainIntro from "../components/MainIntro";
import MainPixabayBanner from "../components/MainPixabayBanner";

function Home(props) {
  return (
    <>
      {/* 메인 슬라이드 */}
      {/* <MainBanner /> */}
      <MainPixabayBanner />
      {/* 회사소개 */}
      <MainIntro />
      {/* 상품소개 */}
    </>
  );
}

export default Home;
