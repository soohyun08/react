import BusinessList from "./BusinessList";
import './BusinessStyle.css'

// 최상위 컴포넌트
function Business() {
  return (
    <>
      <article className="container">
        <h1>business</h1>
        <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>
        <BusinessList />
        <a href="#">View More</a>
      </article>
    </>
  );
}

export default Business;
