import TodoItem from "./TodoItem";

function TodoList(props) {

    return (
        <div className="container justify-content-center">
            <div className="text-center">
                <span className="fs-4 fw-bold">{(props.tasks.length === 0) ? "Empty List" : "To-Do List"}</span>
            </div>
            {props.tasks.length > 0 && props.tasks.map((task) => (
                <TodoItem key={task.id} task={task} toggleComplete={props.toggleComplete} deleteTask={props.deleteTask}/>
            ))}
        </div>
    );
}

export default TodoList;