
const Search = ({search, setSearch, completed, isChecked}) => {

    return (
        <div>
            <label className="me-2">Search</label>
            <input type="text" name="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <label>completed?</label>
            <input type="checkbox" value={completed} onChange={isChecked} name="checkbox" id="checkbox" />
        </div>
    )
}

export default Search
