import "./gallery.scss";

const galleryLis = [
  { id: 1, num: 1 },
  { id: 2, num: 2 },
  { id: 3, num: 3 },
];

function Gallery(props) {
  return (
    <div>
      <ul className="galleryUl">
        {galleryLis.map((item) => (
          <li key={item.id}>
            <a href="#">갤러리 스타일{item.num}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
