import React, { useEffect, useState } from 'react';

function TodoInput(props) {

    const [toDo, setToDo] = useState("");
    const [visible, setVisible] = useState(true);
    
    useEffect(()=>{
        if(toDo.trim()){
            setVisible(false);
        }else{
            setVisible(true);
        }
    },[toDo]);

    function handleAdd(){
        if(toDo.trim()){
            props.addTask(
                {
                    id: Date.now(),
                    time: new Date(),
                    task: toDo,
                    completed: false,
                    user: localStorage.getItem("toDoUser")
                }
            );
            setToDo('');
        }
    }

    return (
        <div className="container d-flex justify-content-center my-5">
            <div className="input-container">
                {visible && <img src="feather.png" id="feather" className="feather" alt="feather" />}
                <input
                    id="task-input"
                    className="input-field"
                    type="text"
                    name="task-input"
                    value={toDo}
                    onChange={(event) => setToDo(event.target.value)}
                    placeholder={`       Enter task...`}
                />
                <i className="fa-solid fa-plus plus-icon" onClick={handleAdd}></i>
            </div>
        </div>
    );
}

export default TodoInput;