import MainBusiness from "../components/MainBusiness";
import MainGallery from "../components/MainGallery";
import MainGuide from "../components/MainGuide";
import MainSwiper from "../components/MainSwiper";
import MainYoutube from "../components/MainYoutube";

import axios from "axios";
import { useState, useEffect } from "react";
import MainService from "../components/MainService";

import KakaoMap from "../components/KakaoMap";

function Main() {
  const [gallery, setGallery] = useState([]);
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    /*     
    axios.get("./DB/imgData.json").then((response) => {
      console.log(response.data.galleryData);
    }); // public 파일에 들어 있는 것들은 index.html 기준 경로
    */
    const getData = async () => {
      const imgDataList = await axios.get("./DB/imgData.json");
      // console.log(imgDataList.data.galleryData);
      setGallery(imgDataList.data.galleryData);
      setBusiness(imgDataList.data.businessData);
    };
    getData();
  }, []);

  return (
    <main>
      <MainSwiper />
      <MainGuide />
      <MainGallery gallery={gallery} />
      <MainBusiness business={business} />
      <MainYoutube />
      <MainService />
      <KakaoMap />
    </main>
  );
}

export default Main;
