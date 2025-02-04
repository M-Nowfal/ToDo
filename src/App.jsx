import React, { useState } from 'react'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import Filter from './Components/Filter'

function App() {

    const [task, setTask] = useState([]);
    const [filter, setFilter] = useState("all");

    function addTask(item) {
        setTask([...task, item]);
    }
 
    function deleteTask(id) {
        setTask(task.filter((item) => item.id !== id));
    }

    function toggleComplete(id){
        setTask(task.map((item) => item.id === id ? {...item, completed: !item.completed} : item));
    }

    const filteredTasks = task.filter((item)=>{
        if(filter === "completed") return item.completed;
        if(filter === "pending") return !item.completed;
        return true;
    })
    return (
        <>
            <Filter setFilter={setFilter} filter={filter}/>
            <TodoInput addTask={addTask} />
            <TodoList tasks={filteredTasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
        </>
    )
}

export default App