import data from "./DB/initialData.json";
const { LushItems } = data;

export function setLushItems() {
  return LushItems;
}

// 클릭한 제품의 번호와 러쉬아이템 데이터 문서의 id와 일치하면 반환
export function getItemId(itemId) {
  return LushItems.find((lushItem) => lushItem.id === itemId); // string로 인식. 그래서 데이터의 id도 문자열로 저장
}

//localStorage :  https://cafe.naver.com/frontend1

const WISHLIST_KEY = "러쉬_위시리스트";

const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || "{}"); // 기본값. 얻은 값이 없으면 오류가 뜨는게 아니고 빈 배열로 보여줘.

export function addWishList(itemId) {
  wishlist[itemId] = LushItems[itemId].title;
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

export function delWishlist(itemId) {
  delete wishlist[itemId];
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

export function getWishlist() {
  return LushItems.filter((item) => wishlist[item.id]);
}
