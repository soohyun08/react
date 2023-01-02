import { useState } from "react";

const Ex6_state2 = () => {
  const [isShow, setIsShow] = useState(false);

  const onShow = () => {
    setIsShow(true);
  };
  const onHide = () => {
    setIsShow(false);
  };
  const onToggle = () => {
    setIsShow(!isShow);
    // ! == not / !true == false / !false == true
  };

  return (
    // 1. 버튼을 클릭하면 onShow 함수 호출
    // 2. 함수실행(isShow 상태 값이 setIsShow의 값으로 변경)
    // 3. 변경된 상태 값을 비교

    <>
      <h1>state 2</h1>
      <p>
        <button onClick={onShow}>show</button>
        <button onClick={onHide}>hide</button>
        <button onClick={onToggle}>{isShow ? "hide" : "show"}</button>
      </p>
      <hr />

      {/* 상함연산자 */}
      {isShow === true ? (
        <div
          style={{
            width: 300,
            height: 100,
            marginBottom: 10,
            backgroundColor: "tomato",
          }}
        >
          box1
        </div>
      ) : null}
      {/* null : 없애라 */}
      <hr />

      {/* 논리연산자 */}
      {isShow && (
        <div
          style={{
            width: 300,
            height: 100,
            marginBottom: 10,
            backgroundColor: "orange",
          }}
        >
          box2
        </div>
      )}
      <hr />

      {/* isShow의 값이 truw이면 B까지 읽지 않아도 참으로 반환됨. 뒤의 내용이 나오지 않음 */}
      {isShow || (
        <div
          style={{
            width: 300,
            height: 100,
            marginBottom: 10,
            backgroundColor: "teal",
          }}
        >
          box3
        </div>
      )}
    </>
  );
};

export default Ex6_state2;
