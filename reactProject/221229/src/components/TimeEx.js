import React from "react";

function TimeEx() {
  return (
    <div style={{ border: "1px solid #000", padding: 10, width: "10vw" }}>
      <h1>현재 시간</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default TimeEx;
