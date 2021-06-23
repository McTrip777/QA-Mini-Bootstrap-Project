const Home = () => {
  return (
    <div className="col-12 d-flex flex-column align-items-center">
      <h1>Welcome to may simple data react page</h1>
      <h2>Data we are working with:</h2>
      <div className="d-flex flex-wrap col-10"> 
        <div className="col-3">
          <h4>People:</h4>
          <ul>
            <li>Id</li>
            <li>Name</li>
            <li>Username</li>
            <li>Email</li>
            <li>
              Address:
              <ul>
                <li>Street</li>
                <li>Suite</li>
                <li>City</li>
                <li>Zipcode</li>
                <li>
                  Geo:
                  <ul>
                    <li>Lat</li>
                    <li>Lng</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Phone</li>
            <li>Website</li>
            <li>Company</li>
          </ul>
        </div>
        <div className="col-3">
          <h4>Comments:</h4>
          <ul>
            <li>PostId</li>
            <li>Id</li>
            <li>Name</li>
            <li>Email</li>
            <li>Body</li>
          </ul>
        </div>
        <div className="col-3">
          <h4>Photos:</h4>
          <ul>
            <li>AlbumId</li>
            <li>Id</li>
            <li>Title</li>
            <li>Url</li>
            <li>ThumbnailUrl</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
