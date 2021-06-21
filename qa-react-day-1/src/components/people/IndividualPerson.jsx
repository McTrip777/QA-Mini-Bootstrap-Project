import PersonAddress from "./PersonAddress";
import PersonCompany from "./PersonCompany";

const IndividualPerson = (props) => {
    const {address, company, email, id, name, phone, username, website} = props
  return (
    <div className="alert alert-dark">
        <h2>{name}</h2>
        <h4>{username}</h4>
        <PersonCompany
            company = {company}
        />
        <div className="alert alert-warning">
            <h3>Contact</h3>
            <p>Phone #: {phone}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
        </div>
        <PersonAddress 
            address = {address}
        />
    </div>
  );
};


// address: {
    // street: "Kulas Light", 
    // suite: "Apt. 556", 
    // city: "Gwenborough", 
    // zipcode: "92998-3874", 
    // geo:{
    //     lat: "-37.3159"
    //     lng: "81.1496"}
// company: {
    // name: "Romaguera-Crona", 
    // catchPhrase: "Multi-layered client-server neural-net", 
    // bs: "harness real-time e-markets"}
// email: "Sincere@april.biz"
// id: 1
// name: "Leanne Graham"
// phone: "1-770-736-8031 x56442"
// username: "Bret"
// website: "hildegard.org"
export default IndividualPerson;
