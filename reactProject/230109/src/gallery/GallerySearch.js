import React, { useState } from "react";
import styled from "styled-components";

const ImgSearch = styled.form`
  text-align: center;
  padding: 30px;

  input[type="text"] {
    width: 160px;
    padding: 4px;
    box-sizing: border-box;
    outline: none;
    border: 1px solid tomato;
  }
  button {
    cursor: pointer;
    width: 50px;
    background-color: tomato;
    color: #fff;
    border: none;
    padding: 3px;
    vertical-align: middle;
    &:hover {
      background-color: #000;
    }
  }
`;

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
