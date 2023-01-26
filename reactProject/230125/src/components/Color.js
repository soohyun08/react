import { useContext } from "react";
import { ColorContext } from "../contexts/ColorContext";

function Color() {
  const { color, onOrange, onTomato, onTeal, onSkyblue } =
    useContext(ColorContext);

  return (
    <div>
      <hr />
      <h2 style={{ color: color }}>color : </h2>
      <button onClick={() => onOrange()}>orange</button>
      <button onClick={() => onTomato()}>tomato</button>
      <button onClick={() => onTeal()}>teal</button>
      <button onClick={() => onSkyblue()}>skyblue</button>
    </div>
  );
}

export default Color;
