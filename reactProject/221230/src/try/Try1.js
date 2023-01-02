import Try1Sub from "./Try1Sub";

function Try1() {
  return (
    <div>
      <h1>연습1</h1>
      <Try1Sub />
      <Try1Sub
        name="이젠"
        email="ezen@ezen.com"
        tel="031-1234-1234"
        color="tomato"
        bgcolor="lightskyblue"
        done={true}
      />
      <Try1Sub
        name="이젠1"
        email="ezen1@naver.com"
        color="orange"
        done={true}
      />
    </div>
  );
}

export default Try1;
