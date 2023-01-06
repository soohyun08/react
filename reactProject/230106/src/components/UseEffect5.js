import { useEffect, useState } from "react";

function UseEffect5() {
  const [count, setCount] = useState(1);
  const [txt, setTxt] = useState(5);

  const changeInput = (e) => {
    const { value } = e.target;
    setTxt(+value); // input의 반환 값은 문자열
  };

  useEffect(() => {
    console.log("실행");

    const timer = setInterval(() => {
      setCount((con) => con + txt);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [txt]);
  // txt 값이 바뀔 때 마다 랜더링

  return (
    <>
      <h1>입력한 값만큼 1초마다 증가</h1>
      <p>
        숫자 간격 : <input type="text" value={txt} onChange={changeInput} />
      </p>
      <h2>{count}</h2>
    </>
  );
}

export default UseEffect5;
