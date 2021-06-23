
const Todo = ({data, query, completed, setCompleted}) => {

  const filterQuery = () => (data) => data.title.includes(query.toLowerCase());
  const checkCompleted = () => (data) => data.completed === completed;
  
  
  
  let filteredList = completed===true 
    ? data.filter(filterQuery(query)).filter(checkCompleted(!completed))
    : data.filter(filterQuery(query))
  
    return (
        <div>
            <h4>To Do's</h4>
            {filteredList.map((item, index) => (
                <div key={index}>
                    <h4>{item.title}</h4>
                    <input 
                        type="checkbox" 
                        name="checkbox" 
                        id="checkbox" 
                        checked={item.completed}
                        readOnly
                        // onChange={(e) => e.target.value = !item.completed} 
                    />
                </div>
            ))}
        </div>
    )
}

export default Todo
