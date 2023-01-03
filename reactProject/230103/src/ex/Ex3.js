import React, { useState } from "react";

function Ex3() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  function idChange(e) {
    const { value } = e.target;
    setId(value);
  }
  function pwChange(e) {
    let val = e.target.value;
    setPw(val);
  }

  return (
    <div>
      <p>비밀번호의 수가 8자 이하면 버튼 비활성화, 9자 이상이면 활성화</p>
      <input type="text" value={id} onChange={idChange} />
      <input type="password" value={pw} onChange={pwChange} />

      {/* 방법1
      {pw.length >= 9 ? (
        <button>로그인</button>
      ) : (
        <button disabled>로그인</button>
      )} 
      */}

      {/* 방법2 */}
      <button disabled={pw.length < 9}>로그인</button>

      <hr />
    </div>
  );
}

export default Ex3;
