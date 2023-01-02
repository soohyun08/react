const Ex4_const = () => {
  const coffee = "menu";
  const latte = "카페라떼";
  const size = "tall";
  const price = 4000;

  const menu = {
    backgroundColor: "#B6E2A1",
    padding: 10,
    fontSize: 20,
  };
  const listStyle = {
    backgroundColor: "#F7A4A4",
    listStyle: "none",
    padding: 0,
    lineHeight: 1.6,
  };

  return (
    <>
      <h2 style={menu}>{coffee}</h2>
      <ul>
        <li style={listStyle}>주문 커피: {latte}</li>
        <li style={listStyle}>가격: {price}</li>
        <li style={listStyle}>사이즈: {size}</li>
      </ul>
    </>
  );
};

export default Ex4_const;
