import React, { useState } from "react";
import { ImgSearch } from "../assets/GalleryStyle";

function GallerySearch({ onSearch }) {
  const [txt, setTxt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!txt) return; // txt가 아닌 빈 form칸인 경우
    onSearch(txt);
  };
  return (
    <ImgSearch onSubmit={handleSubmit}>
      <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />
      <button type="submit">검색</button>
    </ImgSearch>
  );
}

export default GallerySearch;
