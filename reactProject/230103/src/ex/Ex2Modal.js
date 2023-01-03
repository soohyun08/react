function Ex2Modal({ onClose }) {
  return (
    <>
      <div style={{ border: "1px solid #000", width: 200 }}>
        <h2>모달창 띄우기</h2>
        <p className="closeBtn" onClick={onClose}>
          닫기
        </p>
      </div>
    </>
  );
}

export default Ex2Modal;
