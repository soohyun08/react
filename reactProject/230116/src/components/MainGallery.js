import "./mainGallery.scss";

function MainGallery({ gallery }) {
  return (
    <article className="mainGallery">
      {gallery.map((item) => (
        <div className={`galleryBg bg${item.id}`} key={item.id}>
          <h3>{item.title}</h3>
        </div>
      ))}
    </article>
  );
}

export default MainGallery;
