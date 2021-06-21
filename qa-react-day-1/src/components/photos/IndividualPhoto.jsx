const IndividualPhoto = (props) => {
    // albumId: 1
    // id: 1
    // thumbnailUrl: "https://via.placeholder.com/150/92c952"
    // title: "accusamus beatae ad facilis cum similique qui sunt"
    // url: "https://via.placeholder.com/600/92c952"
    const {albumId, id, thumbnailUrl, title, url} = props
    return (
        <div className = "alert alert-dark w-25 m-2">
            <img  src={url} alt="album cover" className="img-thumbnail" style={{width: "300px"}}/>
            <h4>{title}</h4>
        </div>
    )
}

export default IndividualPhoto
