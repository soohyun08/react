import Ex2Sub from "./Ex2Sub";

function Ex2() {
  const latte = { name: "카페라떼", price: 4500 };
  const moca = { name: "카페모카", price: 5000 };
  return (
    <div>
      <h1>props</h1>
      {/* Ex2Sub 컴포넌트에 속성(props) 전달 */}
      <Ex2Sub name="아메리카노" price="4000" />
      <Ex2Sub name="아메리카노" price={4000} />
      <Ex2Sub name={latte.name} price={latte.price} />
      <Ex2Sub name={moca.name} price={moca.price} />
      <Ex2Sub {...latte} />
      <Ex2Sub {...moca} />
    </div>
  );
}

export default Ex2;
