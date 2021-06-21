import photos from "../../data/Photos.json";
import IndividualPhoto from "./IndividualPhoto";

const AllPhotos = () => {
  console.log(photos);
  // albumId: 1
  // id: 1
  // thumbnailUrl: "https://via.placeholder.com/150/92c952"
  // title: "accusamus beatae ad facilis cum similique qui sunt"
  // url: "https://via.placeholder.com/600/92c952"
  return <div className="container mt-3 d-flex justify-content-evenly flex-wrap">
      {photos.map((photo, index) => (
          <IndividualPhoto
            key = {photo.id} 
            albumId= {photo.albumId}
            id= {photo.id}
            thumbnailUrl= {photo.thumbnailUrl}
            title= {photo.title}
            url= {photo.url}
          />
      ))}
    </div>;
};

export default AllPhotos;
