import { useState } from "react";

const Try3_state = () => {
  const [bgcolor, setBgcolor] = useState("orange");

  const onColor = () => {
    /*     if (bgcolor === "tomato") {
      setBgcolor("orange");
    } else {
      setBgcolor("tomato");
    } 
    
    setBgcolor(함수); 
    */

    setBgcolor(bgcolor === "orange" ? "tomato" : "orange");
  };

  return (
    <div>
      <h1>state 연습 1</h1>
      <p>
        박스를 클릭할 때 마다 첫번째 오렌지 색, 두번째 토마토색이 번갈아
        나옴(토글)
      </p>
      <div
        style={{
          border: "1px solid #000",
          padding: 20,
          cursor: "pointer",
          backgroundColor: bgcolor,
          fontWeight: "bold",
        }}
        onClick={onColor}
      >
        backgroundColor: {bgcolor}
      </div>
    </div>
  );
};

export default Try3_state;
