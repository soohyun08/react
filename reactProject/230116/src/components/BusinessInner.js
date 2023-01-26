<figure key={item.id}>
  <Link to="/">
    <img src={path + `/images/${item.img}`} alt={item.title} />
  </Link>
  <figcaption>
    <strong>{item.title}</strong>
    <span>{item.des}</span>
  </figcaption>
</figure>;
