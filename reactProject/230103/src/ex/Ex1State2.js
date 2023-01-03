import { useState } from "react";

function Ex2State2() {
  const [isChk, setIsChk] = useState(false);
  const onCheck = (e) => {
    // setIsChk(e.target.checked); 대상이 checked되면
    const { checked } = e.target;
    setIsChk(checked);
  };

  return (
    <>
      <p>
        <input type="checkbox" checked={isChk} onChange={onCheck} />

        {/* <h2
          style={{
            display: isChk ? "block" : "none",
          }}
        >
          보임
        </h2>
        <h2
          style={{
            display: isChk ? "none" : "block",
          }}
        >
          숨김
        </h2> */}
        {/* 보임:숨김 */}
        {isChk ? "보임" : "숨김"}
      </p>
      <hr />
      {/* <div
        style={{
          width: 300,
          height: 100,
          backgroundColor: "tomato",
          display: isChk ? "block" : "none",
        }}
      >
      </div> */}
      {/* 체크를 하면 박스 보임, 해제하면 안 보임 */}

      {/* 방법1
      {isChk ? (
        <div style={{ width: 300, height: 100, backgroundColor: "tomato",}} ></div>
      ) : null} 
      */}

      {/* 방법2 */}
      {isChk && (
        <div
          style={{
            width: 300,
            height: 100,
            backgroundColor: "tomato",
          }}
        ></div>
      )}
    </>
  );
}

export default Ex2State2;
