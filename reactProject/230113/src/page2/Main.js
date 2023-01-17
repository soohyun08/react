import React from "react";
import Member from "./Member";
import { useAxios } from "./useAxios";

function Main(props) {
  const { data } = useAxios("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <h2>Main</h2>
      <h3>회원수: {data.length}</h3>

      {data.map((item) => (
        <Member key={item.id} item={item} />
      ))}
      {/* item={item}  ==  data={data} .map()으로 돌릴거기 때문에 item으로 보냄 */}
    </div>
  );
}

export default Main;
