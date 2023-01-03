import businessData from "../assets/data/businessData";
import BusinessList from "./BusinessList";
import "../assets/style/businessStyle.css";
import { useState } from "react";

// 최상위 컴포넌트
function Business() {
  const [data, setData] = useState(businessData);

  return (
    <article>
      <h2>BUSINESS</h2>
      <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>

      {/* 불러올 컴포넌트명 */}

      {/* <BusinessList businessData={businessData} /> */}

      <BusinessList data={data} />
      {/* data={data} 자식 컴포넌트에 businessData 전달 */}
      {/* data={data} 동일하게 이름을 부여하는 이유는 props라는 것을 헷갈라지 않게 하기 위해 관용적으로 사용 */}
      {/* 속성={값} / data -> props명 */}

      <p className="more">
        <a href="#">view more</a>
      </p>
    </article>
  );
}

export default Business;
