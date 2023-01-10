import axios from "axios";
import { useEffect, useState } from "react";
import GalleryList from "./GalleryList";
import GallerySearch from "./GallerySearch";
import { Container } from "../assets/GalleryStyle";

function Gallery() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [txt, setTxt] = useState("fashion");

  useEffect(() => {
    const key = `32644675-b73ce007d3edb19e3965930d1`;
    const URL = `https://pixabay.com/api/?key=${key}&q=${txt}&image_type=photo`;

    axios
      .get(URL)
      .then((json) => {
        // console.log(json.data.hits)
        setData(json.data.hits);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setData([]);
        setLoading(true);
        setError("주소 확인이 필요합니다.");
      });
  }, [txt]);

  const onSearch = (txt) => {
    setTxt(txt);
  }; // txt초기값(고정)이 아닌 변화하는 txt 값을 함수로 넘겨줌

  return (
    <Container>
      <GallerySearch onSearch={onSearch} />
      <hr />
      {data && loading ? <p>점검중</p> : <GalleryList data={data} />}
      {error && error}
    </Container>
  );
}

export default Gallery;
