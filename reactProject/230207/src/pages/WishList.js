import { useEffect, useState } from "react";
import { getWishlist, delWishlist } from "../assets";
import ProductItem from "../components/ProductItem";

function WishList() {
  const [product, setProduct] = useState([]);
  const handleDelete = (delItem) => {
    delWishlist(delItem);
    const nextProduct = getWishlist();
    setProduct(nextProduct);
  };

  useEffect(() => {
    const nextProduct = getWishlist();
    setProduct(nextProduct);
  }, []);

  return (
    <>
      <h2>WishList</h2>
      {product.length === 0 ? (
        <h3>위시리스트가 비었습니다.</h3>
      ) : (
        <ul>
          {product.map((item) => (
            <li key={item.id}>
              <ProductItem item={item} />
              <button onClick={() => handleDelete(item.id)}>
                위시리스트에서 삭제
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default WishList;
