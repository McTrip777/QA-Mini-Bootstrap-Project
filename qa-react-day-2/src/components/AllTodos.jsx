import data from "./data.json";
import Search from "./Search";
import Todo from "./Todo";
import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [search, setSearch] = useState("");
  const [completed, setCompleted] = useState(false);
  const [allData, setAllData] = useState(data)
  
  const isChecked = () => setCompleted(!completed)

  useEffect(()=> {
    setAllData(allData)
  }, [data])

  console.log(completed)
  return (
    <div>
      <Search 
        search={search} 
        setSearch={setSearch} 
        isChecked={isChecked}
      />
      <Todo 
        data={data} 
        query={search} 
        completed={completed}
      />
    </div>
  );
};

export default TodoList;
