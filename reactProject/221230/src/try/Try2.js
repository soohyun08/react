// 자식 컴포넌트
import React from "react";

function Box({ wt, ht, bg, border }) {
  const borderStyle = border || ["1px", "solid", "#000"];
  const boxStyle = {
    width: wt || 200,
    height: ht || 50,
    backgroundColor: bg || "#eee",
    margin: "10px auto",
    textAlign: "center",
    borderWidth: borderStyle[0],
    borderStyle: borderStyle[1],
    borderColor: borderStyle[2],
  };

  return <div style={boxStyle}>box</div>;
}
// Box.defaultProps = {props명 : 초기값}

function Try2() {
  return (
    <div>
      <h1>연습2</h1>
      {/* style props:width, height, bgcolor .. */}
      <Box wt={100} ht={100} bg={"tomato"} />
      <Box border={[5, "solid", "red"]} />
    </div>
  );
}

export default Try2;
