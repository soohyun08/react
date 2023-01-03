import { useState } from "react";
import Ex2Modal from "./Ex2Modal";

const Ex2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={onOpen}>모달창 열기</button>
      {/* 버튼을 클릭하면 모달창 열림 */}
      {isOpen && <Ex2Modal onClose={onClose} />}
    </div>
  );
};

export default Ex2;
