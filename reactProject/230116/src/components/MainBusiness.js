import { Link } from "react-router-dom";
import "./mainBusiness.scss";

function MainBusiness({ business }) {
  const path = process.env.PUBLIC_URL;

  return (
    <article className="mainBusiness">
      <h2 className="title">our business</h2>
      <p>
        We are a passionate digital design agency that specializes in beautiful
        and easy-to-use digital design & web development services.
      </p>

      <section className="businessInner">
        {/* 
         {business.map((item) => <FigureImg key={item.id} item={item} /> )
        컴포넌트로 나눠 작성하는 방법 
        */}

        {/* 
        {business.map((item) => {
          return (
            <figure key={item.id}>
              <Link to="/">
                <img src={path + `/images/${item.img}`} alt={item.title} />
              </Link>
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.des}</span>
              </figcaption>
            </figure>
          );
        })} */}
      </section>
    </article>
  );
}

export default MainBusiness;
