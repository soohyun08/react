import Ex3Name from "./Ex3Name";
import Ex3Com from "./Ex3Com";
import Ex3Like from "./Ex3Like";
import { useState } from "react";

function Ex3Props() {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");

  function getName(e) {
    const { value } = e.target;
    setName(value);
  }

  function getAnimal(e) {
    const { value } = e.target;
    setAnimal(value);
  }

  return (
    <div>
      <Ex3Name name={name} getName={getName} />
      <br />
      <Ex3Com animal={animal} getAnimal={getAnimal} />
      <hr />
      <Ex3Like name={name} animal={animal} />
    </div>
  );
}

export default Ex3Props;
