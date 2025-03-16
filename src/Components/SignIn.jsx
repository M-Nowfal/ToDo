import React, { useState } from 'react';

function SignIn() {

    const [user, setUser] = useState("");

    function handleUser() {

        if(!user.trim())
            return;

        fetch(`http://localhost:3000/create-to-do-user/${user}`, { method: "post" })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                localStorage.setItem("toDoUser", user);
                location.reload();
            }else{
                alert("UserName Already Exist");
            }
        });
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <label htmlFor="name" className="mb-2 fw-bold fs-3">Create User Name</label>
            <input
                className="rounded w-75 ps-1 py-2" 
                type="text" 
                name="user-name" 
                autoComplete="off"
                id="name" 
                value={user} 
                placeholder="Enter User Name" 
                onChange={(e) => setUser(e.target.value)} 
            />
            <button className="btn btn-success my-4" onClick={handleUser} >Submit</button>
        </div>
    );
}

export default SignIn;