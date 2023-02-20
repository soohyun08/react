import { useState } from "react";
import firebase from "../firebase";

function Join() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pw1, setPw1] = useState("");
  const [Pw2, setPw2] = useState("");

  const handleSubmit = async () => {
    if (!(Name && Email && Pw1 && Pw2)) {
      return alert("작성이 틀렸습니다");
    }
    if (Pw1 !== Pw2) {
      return alert("비밀번호를 동일하게 입력하세요");
    }

    let createUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Pw1);

    // 반환된 user 값에 닉네임 추가 등록
    await createUser.user.updateProfile({
      displayName: Name,
    });

    console.log(createUser.user);
  };

  return (
    <div>
      <input
        type="text"
        value={Name}
        placeholder="이름을 입력하세요"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        value={Email}
        placeholder="이메일 주소를 입력하세요"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={Pw1}
        placeholder="비밀번호를 입력하세요"
        onChange={(e) => setPw1(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={Pw2}
        placeholder="비밀번호를 입력하세요"
        onChange={(e) => setPw2(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>회원가입</button>
    </div>
  );
}

export default Join;
