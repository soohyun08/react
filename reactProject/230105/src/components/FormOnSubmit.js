import React, { useRef, useState } from "react";

function FormOnSubmit() {
  const focusRef = useRef();
  const idNum = useRef(1);

  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const { name, email } = form;

  const changeInput = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onAdd = (e) => {
    e.preventDefault(); // form 고유의 전송시 사라짐 현상(새로고침) 제거
    /*     
      if (name.length === 0 || email.length) {
      console.log("내용없음");
      return; */

    if (!name || !email) {
      console.log("내용없음");
      return;
    }

    setData([
      ...data,
      {
        id: idNum.current++,
        name,
        email,
      },
    ]);
    setForm({
      name: "",
      email: "",
    });
    focusRef.current.focus();
  };

  return (
    <div style={{ margin: 30 }}>
      {/* <button onclick={onAdd}> 보다 <form onSubmit={onAdd}> 사용이 일반적인 방법 */}
      <form onSubmit={onAdd}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={changeInput}
          ref={focusRef}
        />
        <br />
        <input type="text" value={email} name="email" onChange={changeInput} />
        <br />
        <button type="submit">추가</button>
      </form>
      <hr />
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} : {item.name} / {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormOnSubmit;
