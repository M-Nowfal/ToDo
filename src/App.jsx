import React, { useEffect, useState } from 'react'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import Filter from './Components/Filter'
import SignIn from './Components/SignIn';

function App() {

    const [task, setTask] = useState([]);
    const [filter, setFilter] = useState("all");
    const userName = localStorage.getItem("toDoUser");

    useEffect(() => {
        userName && fetch(`${import.meta.env.VITE_API_URL}/get-to-do/${userName}`)
            .then(res => res.json())
            .then(data => {
                setTask(data.toDos || []);
            })
            .catch(err => console.log(err.message));
    }, []);

    function addTask(item) {
        fetch(`${import.meta.env.VITE_API_URL}/add-to-do`, {
            method: "post",
            body: JSON.stringify({ item }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                setTask([...task, item]);
            })
            .catch(err => console.log(err.message));
    }

    function deleteTask(id) {
        fetch(`${import.meta.env.VITE_API_URL}/del-to-do/${id}/${userName}`, {
            method: "delete"
        })
            .then(res => res.json())
            .then(data => {
                setTask(data.toDos);
            })
            .catch(err => console.log(err));
    }

    function toggleComplete(id) {
        fetch(`${import.meta.env.VITE_API_URL}/toggle-to-do/${id}/${userName}`, {
            method: "put"
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setTask(task.map((item) => item.id === id ? { ...item, completed: !item.completed } : item));
                }
            })
            .catch(err => console.log(err));
    }

    const filteredTasks = task.filter((item) => {
        if (filter === "completed") return item.completed;
        if (filter === "pending") return !item.completed;
        return true;
    });

    return (
        <>
            {!localStorage.getItem("toDoUser") ? <SignIn /> : <>
                <Filter setFilter={setFilter} filter={filter} />
                <TodoInput addTask={addTask} />
                <TodoList tasks={filteredTasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
            </>}
        </>
    );
}

export default App;