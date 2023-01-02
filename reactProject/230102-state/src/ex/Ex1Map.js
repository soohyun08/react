function Ex1Map(props) {
  //   const colors = ["orange", "teal", "tomato", "salmon"];
  const colors = [
    { no: 1, bg: "orange" },
    { no: 2, bg: "teal" },
    { no: 3, bg: "tomato" },
    { no: 4, bg: "salmon" },
  ];
  return (
    <>
      <h1>.map() 연습</h1>
      {/* 리스트 출력. 리스트 배경색과 내용으로 출력  */}
      <ul style={{ fontWeight: "bold", fontSize: 30, lineHeight: 1.6 }}>
        {/* {colors.map((color, idx) => (
          <li key={idx}>{color}</li>
        ))} */}
        {colors.map((color) => {
          const { no, bg } = color;
          return (
            <li key={no} style={{ backgroundColor: bg }}>
              {bg}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Ex1Map;
