import { useState } from "react";

const dataList = [
  { id: 1, name: "chk1", text: "나이 확인", isChk: true },
  { id: 2, name: "chk2", text: "약관 확인", isChk: false },
  { id: 3, name: "chk3", text: "정보 수집 확인", isChk: false },
  { id: 4, name: "chk4", text: "혜택 확인", isChk: false },
];

function CheckBox() {
  const [data, setData] = useState(dataList);

  function changeInput(e) {
    const { checked, name } = e.target;

    if (name === "all") {
      setData(
        data.map((item) => {
          return {
            ...item,
            isChk: checked,
          };
        })
      );
    } else {
      setData(
        data.map((item) =>
          item.name === name ? { ...item, isChk: checked } : item
        )
      );
    }
  }

  return (
    <>
      <input
        type="checkBox"
        name="all"
        onChange={changeInput}
        checked={data.filter((item) => item.isChk !== true).length < 1} // 체크된게 1개 이하면 '전체동의'에서 체크 빼기
      />
      <label> 전체 동의 </label>
      <hr />
      {data.map((info) => (
        <p key={info.id}>
          <input
            type="checkBox"
            checked={info.isChk}
            name={info.name}
            onChange={changeInput}
          />
          <label>{info.text}</label>
        </p>
      ))}

      {/*       
      <p>
        <input type="checkbox" />
        <label> 나이 확인 </label>
      </p>
      <p>
        <input type="checkbox" />
        <label> 약관 확인 </label>
      </p>
      <p>
        <input type="checkbox" />
        <label> 정보 수집 확인 </label>
      </p>
      <p>
        <input type="checkbox" />
        <label> 혜택 확인 </label>
      </p> */}
    </>
  );
}

export default CheckBox;
