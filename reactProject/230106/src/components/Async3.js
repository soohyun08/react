import axios from "axios";
import { useEffect, useState } from "react";

function Async3() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // 성공
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(res.data);
        setLoading(true);
        setError(null); // 없다
      } catch (err) {
        // 실패
        setError(err);
      }
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) return <h3>로딩중입니다...</h3>;
  if (error) return <h3>에러 : 데이터를 불러올 수 없습니다.</h3>;
  if (!data) return null; // 데이터를 불러오지 못할 때

  return (
    <>
      <ol>
        {data.map((item) => (
          <li key={item.id}> {item.title}</li>
        ))}
      </ol>
    </>
  );
}

export default Async3;
