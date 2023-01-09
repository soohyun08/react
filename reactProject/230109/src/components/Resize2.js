import React, { useEffect, useRef } from "react";

function Resize2() {
  console.log("리사이즈");

  const width = useRef(null); //직접 돔에 접근 및 제어. 브라우저 컴포넌트를 재호출하지 않음. 좀 더 빠르고 가볍게 사용 가능해짐

  useEffect(() => {
    window.addEventListener("resize", () => {
      width.current = window.innerWidth;
      console.log(width.current);
    });
  }, []);

  return <></>;
}

export default Resize2;
