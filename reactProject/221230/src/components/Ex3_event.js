const Ex3_event = () => {
  function handleClick1() {
    console.log("handleClick1");
  }
  const handleClick2 = () => {
    console.log("handleClick2");
  };

  const num = (pram) => {
    console.log(pram + pram);
  };

  return (
    <div>
      <h1>event</h1>
      <h2>'on-'접두어 + 첫글자 대문자 이벤트명</h2>
      <p>
        {/* js: onclick onsubmit, JSX: onClick onSubmit */}
        {/* <button onClick={함수명}>클릭</button> */}
        {/* <button onClick={함수}>클릭</button> */}
        <button onClick={handleClick1}>클릭</button>
        <button onClick={handleClick2}>클릭</button>
      </p>
      <p>
        <button onClick={() => console.log("직접 작성")}>클릭</button>
      </p>
      <p>
        {/* 
        {num()} -> 함수 즉시 호출. 처음부터 실행되게 됨.

        {함수(인수) => 함수 (매개변순)}
        () => 함수(값)
        
        */}
        {/* <button onClick={num(100)}>숫자 출력</button> */}
        <button onClick={() => num(200)}>숫자 출력</button>
      </p>
    </div>
  );
};

export default Ex3_event;
