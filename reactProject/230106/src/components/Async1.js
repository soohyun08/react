import React, { useEffect, useState } from "react";
import axios from "axios";

function Async1() {
  const [data, setData] = useState([]);

  /* 방법 1. fetch
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); 
  */

  /* 방법 2. axios.get(url);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);
  */

  /* 방법 3. async / await
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []); 
  */

  // 방법 4. async / await + axios
  useEffect(() => {
    // 함수 정의
    const getData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data);
    };
    getData();
  }, []);

  return (
    <>
      <h1>외부 데이터 불러오기</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title.substr(0, 14)}</h3>
            {item.body.substr(0, 50)}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Async1;
