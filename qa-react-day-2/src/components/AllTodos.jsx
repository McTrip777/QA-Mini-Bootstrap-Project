import data from "./data.json";
import Search from "./Search";
import Todo from "./Todo";
import React, { useState } from "react";

const TodoList = () => {
  const [search, setSearch] = useState("");
  const [completed, setCompleted] = useState(false);
  
  const isChecked = () => setCompleted(!completed)

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
