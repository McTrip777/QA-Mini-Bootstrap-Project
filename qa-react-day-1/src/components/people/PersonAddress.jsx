import PersonGeo from "./PersonGeo";
const personAddress = (props) => {
  // address:
  // city: "Gwenborough"
  // geo: {lat: "-37.3159", lng: "81.1496"}
  // street: "Kulas Light"
  // suite: "Apt. 556"
  // zipcode: "92998-3874"
  const { city, geo, street, suite, zipcode } = props.address;
  return (
    <div className="alert alert-primary">
      <h3>Address</h3>
      <div className="d-flex">
        <p className="me-2">{street},</p>
        <p>{suite}</p>
      </div>
      <div className="d-flex">
        <p className="me-2">{city}</p>
        <p>{zipcode}</p>
      </div>
      <PersonGeo lat={geo.lat} lng={geo.lng} />
    </div>
  );
};

export default personAddress;
