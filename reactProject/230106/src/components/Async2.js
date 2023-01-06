import axios from "axios";
import { useEffect, useState } from "react";

function Async2() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.co")
      .then((res) => {
        // 응답 성공
        setData(res.data);
        setLoading(false);
        setError("");
      })
      .catch((error) => {
        //응답 실패
        setData([]);
        setLoading(true);
        setError("주소를 찾을 수 없습니다.");
      });
  }, []);

  /*   useEffect(() => {
    const getData = async () => {
      const res = await axios.get("");
      setData(res.data);
    };
    getData();
  }, []); */

  return (
    <>
      {data && loading ? (
        <h2>로딩중...</h2>
      ) : (
        <ol>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ol>
      )}
      <h3 style={{ color: "red" }}>{error && error}</h3>
    </>
  );
}

export default Async2;
