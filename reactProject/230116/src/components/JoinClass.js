import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./join.scss";

function Join() {
  const navigate = useNavigate();
  const initVal = {
    userid: "",
    email: "",
    pwd1: "",
    pwd2: "",
    reason: "",
    gender: null,
    interest: null,
  };
  const [Val, setVal] = useState(initVal);

  const [Err, setErr] = useState({});

  const [Submit, setSubmit] = useState(false);

  const check = (value) => {
    const errs = {};

    const eng = /[a-zA-Z]/;
    const num = /[0-9]/;
    const spc = /[~!@#$%^&*()_+]/;

    if (value.userid.length < 5) {
      errs.userid = "5글자 이상 입력하세요";
    }
    //이메일 인증은 8글자 이상, @있어야한다
    if (value.email.length < 8 || !/@/.test(Val.email)) {
      errs.email = "이메일은 8글자 이상 @를 포함하세요";
    }
    if (
      value.pwd1 < 5 ||
      !eng.test(value.pwd1) ||
      !num.test(value.pwd1) ||
      !spc.test(value.pwd1)
      //5글자보다 작으면 참이므로 이후의 것은 판단하지 않고 밑으로 내려가서 에러메세지를 출력, 거짓이면 ||을 넘어가서 영어글자수를 물어보는것 영어글자가 없으면 참이므로 밑에 에러메세지 있으면? 거짓이므로 ||을 넘어감 이렇게 모두 거짓이어야 에러메세지가 없이 통과
    ) {
      errs.pwd1 = "5글자 이상, 영문, 숫자, 특수문자를 모두 포함해야 합니다";
    }
    if (value.pwd1 !== value.pwd2 || value.pwd2 < 5) {
      errs.pwd2 = "비밀번호가 틀립니다";
    }
    if (!Val.gender) {
      errs.gender = "성별을 선택하세요";
    }
    if (!Val.interest) {
      errs.interest = "관심사를 선택하세요";
    }
    if (Val.reason === "") {
      errs.reason = "이유를 선택하세요";
    }
    return errs;
  };

  const handleChange = (e) => {
    //순서 2 - 입력하고 있는 인풋요소의 네임, 벨류값을 변수로 비구조화 할당
    const { name, value } = e.target;
    //순서 3 - 비구조화 할당으로 받은 값을 Val state에 저장하고
    //순서 4 -setVal함수가 렌더링해서 우리가 볼 수 있도록 함
    setVal({ ...Val, [name]: value });
  };

  const handleRadio = (e) => {
    const { name } = e.target;
    const isChecked = e.target.checked;
    setVal({ ...Val, [name]: isChecked });
  };

  const handleSelect = (e) => {
    const { name } = e.target;
    const isSelected = e.target.value;
    setVal({ ...Val, [name]: isSelected });
  };

  const handleCheck = (e) => {
    let isChecked = false;
    const { name } = e.target;
    const inputs = e.target.parentElement.querySelectorAll("input");
    inputs.forEach((el) => {
      if (el.checked) isChecked = true;
    });
    setVal({ ...Val, [name]: isChecked });
  };
  const handleReset = () => {
    setSubmit(false);
    setErr({});
    setVal(initVal);
  };

  const handleSubmit = (e) => {
    //순서 6 일단 서버전송은 막아준다
    e.preventDefault();
    //순서 7 Val state값을 인수로 전달해서 check함수에서 인증검사 시작 <={ check(Val)}
    setErr(check(Val));
    //순서 8 인증검사 결과 errs가 존재한다면 반환된 에러 객체를 Err state에 옮겨 담음
  };

  useEffect(() => {
    // Object.keys(); 전달된 객체에서 직접 찾은 열거할 수 있는 속성 이름에 해당하는 문자열 배열을 반환
    const len = Object.keys(Err).length;
    if (len === 0 && Submit) {
      alert("회원가입이 완료되었습니다. 메인페이지로 이동합니다.");
      navigate("/");
    }
  }, [Err]);

  return (
    <article className="join">
      <div className="banner">join</div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>회원가입</legend>
          {/* userid */}
          <div className="row">
            <label htmlFor="userid">
              아이디 <em>(5글자 이상)</em>
            </label>
            <input
              type="text"
              placeholder="아이디를 입력하세요"
              name="userid"
              id="userid"
              value={Val.userid}
              //순서1 - 인풋에 값을 입력시 핸들체인지 함수가 호출
              onChange={handleChange}
            />
            {/* 순서 9 만약 에러객체가 있다면 화면에 출력 */}
            <span className="err">{Err.userid}</span>
          </div>

          {/* password */}
          <div className="row">
            <label htmlFor="pwd1">
              비밀번호 <em>(5글자 이상, 영문, 숫자, 특수문자를 모두 포함)</em>
            </label>
            <input
              type="password"
              name="pwd1"
              id="pwd1"
              placeholder="비밀번호를 입력하세요"
              onChange={handleChange}
            />
            <span className="err">{Err.pwd1}</span>
          </div>
          <div className="row">
            <label htmlFor="pwd2">비밀번호 확인</label>
            <input
              type="password"
              name="pwd2"
              id="pwd2"
              placeholder="비밀번호를 입력하세요"
              onChange={handleChange}
            />
            <span className="err">{Err.pwd2}</span>
          </div>
          {/* email */}
          <div className="row">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="이메일 주소를 입력하세요"
              value={Val.email}
              onChange={handleChange}
            />
            <span className="err">{Err.email}</span>
          </div>
          {/* reason */}
          <div className="row">
            <label htmlFor="reason">가입이유</label>
            <select name="reason" id="reason" onChange={handleSelect}>
              <option value="">선택하세요</option>
              <option value="just1">그냥 1</option>
              <option value="just2">그냥 2</option>
              <option value="just3">그냥 3</option>
              <option value="study">공부</option>
            </select>
            <span className="err">{Err.reason}</span>
          </div>

          {/* gender */}
          <div className="row check">
            <p>성별</p>
            <label htmlFor="male">남</label>
            <input
              type="radio"
              name="gender"
              id="male"
              onChange={handleRadio}
            />

            <label htmlFor="female">여</label>
            <input
              type="radio"
              name="gender"
              id="female"
              onChange={handleRadio}
            />
            <span className="err">{Err.gender}</span>
          </div>

          {/* interest */}
          <div className="row check">
            <p>관심분야</p>
            <label htmlFor="html5">html5</label>
            <input
              type="checkbox"
              name="interest"
              id="html5"
              onChange={handleCheck}
            />

            <label htmlFor="css3">css3</label>
            <input
              type="checkbox"
              name="interest"
              id="css3"
              onChange={handleCheck}
            />

            <label htmlFor="js">js</label>
            <input
              type="checkbox"
              name="interest"
              id="js"
              onChange={handleCheck}
            />
            <span className="err">{Err.interest}</span>
          </div>

          {/* 전송 버튼 */}
          <div className="btnGroup">
            <button type="submit" value="send" onClick={() => setSubmit(true)}>
              가입
            </button>
            <button type="reset" value="cancel" onClick={handleReset}>
              취소
            </button>
          </div>
        </fieldset>
      </form>
    </article>
  );
}

export default Join;
