import { useDispatch, useSelector } from "react-redux"; // 리듀서 파일
import { orange, teal, salmon } from "../store/colorReducer";

function Color() {
  const stateColor = useSelector((state) => state.colorA.color);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 style={{ color: stateColor }}>color:{stateColor}</h2>
      <button onClick={() => dispatch(orange())}>orange</button>
      <button onClick={() => dispatch(teal())}>teal</button>
      <button onClick={() => dispatch(salmon())}>salmon</button>
    </div>
  );
}

export default Color;
