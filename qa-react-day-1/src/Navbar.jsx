const Navbar = () => {
    return (
        <div className="d-flex justify-content-evenly alert alert-dark">
            <a className="btn btn-secondary" href="/">Home</a>
            <a className="btn btn-success" href="/people">People</a>
            <a className="btn btn-primary" href="comments">Comments</a>
            <a className="btn btn-warning" href="photos">Photos</a>
        </div>
    )
}

export default Navbar
