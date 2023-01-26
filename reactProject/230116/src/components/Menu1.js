import { useNavigate, useParams } from "react-router-dom";

function Menu1() {
  const { m1 } = useParams();
  const navi = useNavigate();

  const goToPrev = () => {
    navi("/");
  };

  return (
    <div className="wrapper">
      <h2>{m1}</h2>
      <button onClick={goToPrev}>이전으로</button>
    </div>
  );
}

export default Menu1;
