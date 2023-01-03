import BusinessItem from "./BusinessItem";

function BusinessList({ data }) {
  return (
    <ul className="business">
      {data.map((item) => (
        // items -> businessData 배열
        <BusinessItem key={item.id} item={item} />
        // item={item} -> businessData의 객체 하나하나를 다 props로 돌려 준다.
      ))}
    </ul>
  );
}

export default BusinessList;
