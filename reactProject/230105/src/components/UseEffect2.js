import { useState, useRef, useEffect } from "react";

function UseEffect2() {
  const [txt, setTxt] = useState("");
  const txtRef = useRef();

  useEffect(() => {
    console.log("실행");
    txtRef.current.focus();
  }, []); // 딱 한 번만 실행

  return (
    <div>
      <h1>useEffect 2</h1>
      <input
        type="text"
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
        ref={txtRef}
      />
    </div>
  );
}

export default UseEffect2;
