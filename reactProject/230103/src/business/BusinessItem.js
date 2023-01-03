function BusinessItem({ item }) {
  const { imgURL, title, subTitle, des } = item;
  const path = process.env.PUBLIC_URL;

  return (
    <li className="businessList">
      <a href="#">
        <div className="businessImg">
          <img src={path + imgURL} alt={title} />
        </div>
        <h3>
          {title}
          <strong>{subTitle}</strong>
        </h3>
        <p>{des}</p>
      </a>
    </li>
  );
}

export default BusinessItem;
