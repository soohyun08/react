import "./kakaoMap.scss";
import KakaoFactory from "./KakaoFactory";
import KakaoOffice from "./KakaoOffice";
import { useState } from "react";

function KakaoMap() {
  const [tab, setTab] = useState(1);

  return (
    <article className="kakaoMap">
      <h2 className="title">location</h2>

      <ul className="tabMenu">
        <li onClick={() => setTab(1)} className={tab === 1 ? "active" : ""}>
          <h2 className="tabBtn1">office</h2>
          <KakaoOffice />
        </li>
        <li onClick={() => setTab(2)} className={tab === 2 ? "active" : null}>
          <h2 className="tabBtn2 active">factory</h2>
          <KakaoFactory />
        </li>
        {/* 
        버튼 다수일 때 
        {data.map(item => <li onClick={() => setTab(item.id)} className={tab === item.id ? "active" : null}></li>)} */}
      </ul>
    </article>
  );
}

export default KakaoMap;
