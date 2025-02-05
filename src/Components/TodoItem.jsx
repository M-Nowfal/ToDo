import React, { useState } from 'react';

function TodoItem(props) {

    return (
        <div className="output-container mt-3 mx-auto">
            <input type="checkbox" checked={props.task.completed} name={props.task.task} className="task-completed" onChange={() => props.toggleComplete(props.task.id)} />
            <span className="fs-5 text-secondary">{props.task.time.toString().substring(0,21)}</span>
            <input name={props.task.task} className={`output-field ${(props.task.completed) ? "text-decoration-line-through" : "text-decoration-line-none"}`} value={props.task.task} readOnly />
            <i className="fa-solid fa-trash-can trash-icon" onClick={() => {props.deleteTask(props.task.id)}}></i>
        </div>
    );
}

export default TodoItem;