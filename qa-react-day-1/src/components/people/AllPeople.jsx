import people from "../../data/People.json";
import IndividualPerson from "./IndividualPerson";

const AllPeople = () => {
  return (
    <div className="container mt-4">
      {people.map((person, index) => (
        <IndividualPerson
          key={person.id}
          address={person.address}
          company={person.company}
          email={person.email}
          id={person.id}
          name={person.name}
          phone={person.phone}
          username={person.username}
          website={person.website}
        />
      ))}
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
export default AllPeople;
