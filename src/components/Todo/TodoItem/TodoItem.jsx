import React from "react";
import style from "./TodoItem.module.css"

const TodoItem = (props) => {
    let className
    if (props.task.complited === true) {
        className = 'active'
    }

    return (
        <li className={className} id={props.task.id} onClick={() => {props.onComplitedTaskClick(props.task.id)}}>
            {props.task.message}
            <button onClick={() => {props.onDeleteTaskClick(props.task.id)}}>delete</button>
        </li>
    )
}

export default TodoItem
