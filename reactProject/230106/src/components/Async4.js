import axios from "axios";
import { useEffect, useState } from "react";

function Async4() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=87dc0d5e42c94e9ca961a4c479ea1f22`;
    axios.get(url).then((res) => setData(res.data.articles));
  }, []);

  return (
    <>
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>
            <a href={item.url} target="_blank">
              <img
                src={item.urlToImage}
                alt={item.title}
                style={{ width: "50%" }}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Async4;
