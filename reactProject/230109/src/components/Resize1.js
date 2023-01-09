import React, { useEffect, useState } from "react";

function Resize1() {
  console.log("리사이즈");
  const [width, setWidth] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    console.log(width);
  }, [width]);

  //   화면의 변화를 감지할 때 Resize1 컴포넌트 전체를 리랜더딩함

  return <div></div>;
}

export default Resize1;
