import React, { useRef, useState } from "react";

function Ex1() {
  // 커서
  const focusRef = useRef();
  //   key
  const idNum = useRef(1);
  // 추가된 내용들 []안에 저장
  const [data, setData] = useState([]);
  //   {id: idRef, text:txt}
  const [txt, setTxt] = useState("");

  const changeInput = (e) => {
    setTxt(e.target.value);
  };

  function onAdd() {
    setData([
      ...data,
      {
        id: idNum.current++,
        // txt : txt 키와 값이 같으면 생략가능
        txt,
      },
    ]);

    setTxt("");
    focusRef.current.focus();
  }

  return (
    <div style={{ margin: 30 }}>
      <input type="text" value={txt} onChange={changeInput} ref={focusRef} />
      <button onClick={onAdd}>추가</button>
      <hr />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} : {item.txt}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ex1;
