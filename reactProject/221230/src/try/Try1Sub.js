function Try1Sub({ name, email, tel, color, bgcolor, done }) {
  return (
    <div
      style={{
        border: `3px solid ${color}`,
        marginBottom: 10,
        paddingLeft: 10,
        backgroundColor: bgcolor,
      }}
    >
      <h2>{name}</h2>
      <ul>
        <li>email: {email}</li>
        <li>tel: {tel}</li>
        <li>color: {color}</li>
        <li>bgcolor: {bgcolor}</li>
        <li>확인: {done ? "확인" : "취소"}</li>
      </ul>
    </div>
  );
}

// 초기값 설정. 선택 사항
// 자식컴포넌트.defaultProps = {props명 : 초기값}
Try1Sub.defaultProps = {
  name: "이름",
  email: "이메일",
  tel: "연락처",
  color: "#999",
  bgcolor: "#efefef",
  done: false,
};

export default Try1Sub;
