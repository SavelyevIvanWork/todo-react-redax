import React from "react"
import TodoContainer from "./Todo/TodoContainer";


const TodoApp = () => {
    return (
        <div className="wrapper">
            <div className="title-wrapper">
                <h3 className="title">Your todo list</h3>
            </div>
            <TodoContainer/>
        </div>
    )
}

export default TodoApp
