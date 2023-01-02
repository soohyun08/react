const Ex4_map = () => {
  const arr = ["아메리카노", " 라떼", "모카", "바닐라라떼", "에스프레소"];
  const data = [
    { id: 1, name: "아메리카노" },
    { id: 2, name: "라떼" },
    { id: 3, name: "모카" },
    { id: 4, name: "바닐라라떼" },
    { id: 5, name: "에스프레소" },
  ];

  return (
    <div>
      <h1>map</h1>
      <ul>
        {/* 
        arr.map((item, idx) => {}) 
         ㄴ 새로운 배열로 반환
         ㄴ .map() 사용시 key값을 요소에 부여해야함
         ㄴ key: 고유성을 유지해야 하기 때문에 중복된 번호 사용 안됨
         ㄴ index의 경우 단순 출력이 필요한 경우만 사용
         ㄴ 삭제, 수정, 추가 등에서는 index가 아닌 key 사용
         ㄴ 대부분 안정적인 고유성을 부여하기 위해 배열 내부 요소에 id를 작성하여 key로 사용 
         
        */}
        {arr.map((item, idx) => (
          <li key={idx}>{item}</li> // 인덱스번호는 고유한 key 값이 되지 못함
        ))}
      </ul>
      <hr />
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Ex4_map;
