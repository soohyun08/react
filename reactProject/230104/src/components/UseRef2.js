import { useRef } from "react";

function UseRef2() {
  // 선언
  const ref1 = useRef(null);
  const ref2 = useRef();

  const onColor = () => {
    // 사용
    ref1.current.style.backgroundColor = "tomato";
    ref1.current.style.padding = "20px";
    ref1.current.style.color = "teal";

    ref2.current.style.backgroundColor = "orange";
  };

  return (
    <>
      {/* DOM 연결 ref={} */}
      <p ref={ref1}>useRef 연습</p>
      <p ref={ref2}>useRef 연습</p>
      <button onClick={onColor}>확인</button>
    </>
  );
}

export default UseRef2;
