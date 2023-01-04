import React, { useState, useRef } from "react";

function Ex5Ref() {
  const [userId, setUserId] = useState();
  const [userPw, setUserPw] = useState();
  const [userEmail, setUserEmail] = useState();
  const cursor = useRef();

  function changeInput(e) {
    let { value } = e.target;
    setUserId(value);
  }

  const reset = () => {
    setUserId("");
    setUserPw("");
    setUserEmail("");

    cursor.current.focus();
  };

  return (
    <>
      {/* 취소 후 커서 Id에 */}
      아이디:{" "}
      <input
        type="text"
        value={userId}
        name="id"
        onChange={changeInput}
        ref={cursor}
      />
      <br />
      비번: <input type="password" value={userPw} onChange={changeInput} />
      <br />
      이메일: <input type="email" value={userEmail} onChange={changeInput} />
      <br />
      <button onClick={reset}>취소</button>
      <hr />
      <h3>
        id : {userId} / pw : {userPw} / email : {userEmail}
      </h3>
    </>
  );
}

export default Ex5Ref;
