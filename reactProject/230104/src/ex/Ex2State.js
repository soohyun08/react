import { useState } from "react";

function Ex2State() {
  const [color, setColor] = useState("transparent");
  const [txt, setTxt] = useState("");

  function getColor(e) {
    // 내가 클릭한 대상의 value 값을 가져와야 함
    let val = e.target.value;
    console.log(val);
    setTxt(val);
  }

  const changeBg = () => {
    setColor(txt);
  };

  return (
    <div style={{ height: "100vh", backgroundColor: color }}>
      <h1>컬러 선택</h1>
      <select onChange={getColor}>
        <option value="orange">orange</option>
        <option value="maroon">maroon</option>
        <option value="tomato">tomato</option>
        <option value="teal">teal</option>
        <option value="lightskyblue">lightskyblue</option>
      </select>
      <button onClick={changeBg}>변경</button>
    </div>
  );
}

export default Ex2State;
