import "./news.scss";

const newsLis = [
  { id: 1, name: "고객센터" },
  { id: 2, name: "집꾸미기" },
  { id: 3, name: "인테리어 트랜드" },
  { id: 4, name: "자주묻는 질문" },
  { id: 5, name: "Contact Us" },
];

function News(props) {
  return (
    <div>
      <ul className="newsUl">
        {newsLis.map((item) => (
          <li key={item.id}>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
