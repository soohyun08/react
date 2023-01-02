import BusinessItem from "./BusinessItem";

const BusinessList = () => {
  return (
    <>
      <ul>
        {BusinessItem.map((item) => {
          const {id, url, title, enTitle, descript} = item;
          return (
            <li key={id}>
              <img src={url} alt={"이미지" + id}/>
              <h3>
                <span>{title}</span>
                <span>{enTitle}</span>
              </h3>
              <p>{descript}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BusinessList;
