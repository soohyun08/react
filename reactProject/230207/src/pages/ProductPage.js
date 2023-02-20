import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getItemId, addWishList } from "../assets";

function ProductPage() {
  const path = process.env.PUBLIC_URL;

  const { itemId } = useParams(); // App.js에서

  // 클릭한 제품의 번호의 데이터만 불러오는 함수
  const item = getItemId(itemId);
  console.log(item); // 클릭해서 추려낸 제품만 의미  == item

  const navigate = useNavigate();

  if (!item) {
    return <Navigate to="/products" />; // == Link, NavLink
  }

  const handleAddWishList = () => {
    // alert("저장 되었습니다");
    addWishList(item.id);
    navigate("/wishList"); // 클릭하면 넘어감
  };

  return (
    <section>
      <h3>프로덕트 페이지 </h3>
      <h2>{item.title}</h2>
      <img src={`${path}/images/${item.imgUrl}.jpg`} alt={item.title} />
      <button onClick={handleAddWishList}>위시리스트 저장</button>
    </section>
  );
}

export default ProductPage;
