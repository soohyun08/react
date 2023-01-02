import React, { useState } from "react";

function Ex2State2(props) {
  const [data, setData] = useState([]);
  const [txt, setTxt] = useState("");

  function itemList(e) {
    // onChange={itemList}의 변화를 감지할 때마다 이 함수가 작동됨.
    let val = e.target.value;
    // value 값을 가져와서 setTxt에 새롭게 입력. setTxt -> txt로
    // console.log(val);
    setTxt(val);
  }
  function addItem() {
    // txt === "" && alert("내용을 작성해 주세요");  (x) return 작성할 수 없음
    if (txt === "") {
      alert("내용을 작성해 주세요");
      return; // 더 이상 진행시키지 않고 빠져나옴
    }

    setData((prevItem) => {
      let idx = prevItem.length;
      return [...prevItem, { id: idx++, name: txt }];
    });

    setTxt(""); // 빈 택스트 필드
  }

  return (
    <>
      {/* onChange 변경될 때마다 인식 */}
      <input type="text" value={txt} onChange={itemList} />
      <button onClick={addItem}>추가</button>
      <hr />

      {/* 입력 내용을 리스트로 출력 */}
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
        {/* 구조분해할당(const {id, item} = data) 사용시 return 이용 */}
      </ul>
    </>
  );
}

export default Ex2State2;
