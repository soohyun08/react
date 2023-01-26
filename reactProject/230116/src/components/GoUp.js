import { useEffect, useState } from "react";
import "./goUp.scss";

function GoUp() {
  const [upBtn, setUpBtn] = useState(false);
  // const [scroll, setScroll] = useState(0);

  const handleGoUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log(window.scrollY); // 생성이 되었을 때 한번 실행
    const handleScroll = () => {
      window.scrollY > 200 ? setUpBtn(true) : setUpBtn(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; // 다 썼을 때 클린업. 준 값을 회수
  }, []);

  return (
    <div className={upBtn ? "goUpBtn on" : "goUpBtn"} onClick={handleGoUp}>
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
        <path
          fill="#fff"
          d="M14.15 30.15 12 28 24 16 36 28 33.85 30.15 24 20.3Z"
        />
      </svg>
    </div>
  );
}

export default GoUp;
