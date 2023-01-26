import { useNavigate, useParams } from "react-router-dom";

function Menu2() {
  const { m2 } = useParams();
  const navi = useNavigate();

  const goToPrev = () => {
    navi("/");
  };

  return (
    <div className="wrapper">
      <h2>{m2}</h2>
      <button onClick={goToPrev}>이전으로</button>
    </div>
  );
}

export default Menu2;
