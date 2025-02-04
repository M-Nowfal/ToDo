import React from 'react'

function Filter(props) {
    return (
        <div className="filter-btns-container">
            <button className={`filter-btn ${(props.filter === "all") ? "selected" : ""}`}  onClick={() => props.setFilter("all")}>All</button>
            <button className={`filter-btn ${(props.filter === "completed") ? "selected" : ""}`} onClick={() => props.setFilter("completed")}>Completed</button>
            <button className={`filter-btn ${(props.filter === "pending") ? "selected" : ""}`} onClick={() => props.setFilter("pending")}>Pending</button>
        </div>
    );
}

export default Filter