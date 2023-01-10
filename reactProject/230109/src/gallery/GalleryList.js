import { GalleryListContainer } from "../assets/GalleryStyle";
import { breakpointColumnsObj } from "../assets/GalleryStyle";
import Masonry from "react-masonry-css";
import GalleryItem from "./GalleryItem";

function GalleryList({ data }) {
  return (
    <GalleryListContainer>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </Masonry>
    </GalleryListContainer>
  );
}

export default GalleryList;
