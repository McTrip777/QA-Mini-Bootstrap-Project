const PersonCompany = (props) => {
    // company:
    // bs: "harness real-time e-markets"
    // catchPhrase: "Multi-layered client-server neural-net"
    // name: "Romaguera-Crona"
    const {name, bs, catchPhrase} = props.company
    return (
        <div className="alert alert-secondary">
            <h4>Company</h4>
            <h5>{name}</h5>
            <p>{catchPhrase}</p>
            <p>{bs}</p>
        </div>
    )
}

export default PersonCompany
