import React, { useState, useRef } from "react";

function Ex5Ref() {
  const idRef = useRef();
  /* 
  const [userId, setUserId] = useState();
  const [userPw, setUserPw] = useState();
  const [userEmail, setUserEmail] = useState(); 
  
  위의 내용을 통틀어 적는 방법 -> */
  const [form, setForm] = useState({
    userId: "",
    userPw: "",
    userEmail: "",
  });
  const { userId, userPw, userEmail } = form;

  function changeInput(e) {
    let { value, name } = e.target; // target 이 클릭되었을 때, target의 value, name을 기억하고 있어라
    setForm({
      ...form, // 앞서 작성한 것도 포함해서, 지금 입력하고 있는 것을 보여줌
      [name]: value, // 특정 이름의 value -> id 처럼 사용중
    });
  }

  const onReset = () => {
    setForm({
      userId: "",
      userPw: "",
      userEmail: "",
    });

    idRef.current.focus();
  };

  return (
    <>
      {/* 취소 후 커서 Id에 */}
      아이디:{" "}
      <input
        type="text"
        value={userId}
        name="userId"
        onChange={changeInput}
        ref={idRef}
      />
      <br />
      비번:{" "}
      <input
        type="password"
        value={userPw}
        name="userPw"
        onChange={changeInput}
      />
      <br />
      이메일:{" "}
      <input
        type="email"
        value={userEmail}
        name="userEmail"
        onChange={changeInput}
      />
      <br />
      <button onClick={onReset}>취소</button>
      <hr />
      <h3>
        id : {userId} / pw : {userPw} / email : {userEmail}
      </h3>
    </>
  );
}

export default Ex5Ref;
