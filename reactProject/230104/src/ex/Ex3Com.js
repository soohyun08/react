import React from "react";

function Ex3Com({ animal, getAnimal }) {
  return (
    <div>
      <label>동물 : </label>
      <input type="text" value={animal} onChange={getAnimal} />
      <strong style={{ color: "teal" }}>{animal}</strong>
    </div>
  );
}

export default Ex3Com;
