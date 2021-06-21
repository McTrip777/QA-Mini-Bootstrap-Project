const PersonGeo = (props) => {
  return <div className="d-flex">
      <p className="me-3">lat: {props.lat}</p>
      <p>lng: {props.lng}</p>
  </div>;
};

export default PersonGeo;
