import data from "./data";

function BusinessList() {
  return (
    <>
      <ul>
        {data.map((item) => {
          const { id, url, h3, span, p } = item;
          return (
            <li key={id}>
              <img src={url} alt={"img" + id} />
              <h3>
                {h3}
                <span>{span}</span>
              </h3>
              <p>{p}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default BusinessList;
