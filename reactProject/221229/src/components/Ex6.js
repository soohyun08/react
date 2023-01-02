import React from "react";

function Ex6() {
  const border = { border: "1px solid #000", padding: 10, width: 200 };
  const done1 = true;
  const done2 = false;
  const done3 = undefined;

  return (
    <div>
      <p style={border}>
        {done1 === true ? <button>참 버튼</button> : <button>거짓 버튼</button>}
      </p>

      <h2>논리연산자 && </h2>
      <p style={border}>{done1 && <strong>A, B 조건 모두 참인 결과</strong>}</p>

      <h2>논리연산자 ||</h2>
      <p style={border}>{done1 || <button>A 조건이 참인 경우</button>}</p>
      <p style={border}>{done2 || <button>A 조건이 거짓인 경우</button>}</p>

      <h3>논리연산자 undefined ||</h3>
      <p style={border}>{done3 || <strong>내용을 찾을 수 없습니다</strong>}</p>
    </div>
  );
}

export default Ex6;
