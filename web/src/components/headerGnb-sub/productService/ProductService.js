import "./productService.scss";
import ServiceInfo from "./productServiceSub/ServiceInfo";
import ProductInfo from "./productServiceSub/ProductInfo";

const productServiceLis = [
  /*   { id: 1, name: "서비스소개", subMenu: <ServiceInfo /> },
  { id: 2, name: "제품안내", subMenu: <ProductInfo /> }, */
  { id: 1, name: "서비스소개" },
  { id: 2, name: "제품안내" },
];

function ProductService(props) {
  return (
    <div>
      <ul className="productServiceUl">
        {productServiceLis.map((item) => (
          <li key={item.id}>
            <a href="#">
              {item.name}
              {/*               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg> */}
            </a>
            {/* {item.subMenu} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductService;
