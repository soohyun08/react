import { useParams } from "react-router-dom";

function About({ data }) {
  // const {사용자정의 변수명} = useParams(); 사용자 정의 변수를 받음
  const { id } = useParams();

  return (
    <div>
      <h2>about</h2>
      <hr />
      <h3>{id}</h3>
      {data
        .filter((item) => item.title === id)
        .map((item) => (
          <section key={item.id}>
            <p>{item.info}</p>
          </section>
        ))}
    </div>
  );
}

export default About;
