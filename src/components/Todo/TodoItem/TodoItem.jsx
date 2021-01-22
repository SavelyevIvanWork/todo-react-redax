import React from "react";
import style from "./TodoItem.module.css"

const TodoItem = (props) => {

    let className = style.item;

    let onclickTask = (e) => {

        className = style.done
    }


    return (
        <li className={className} id={props.id} onClick={onclickTask}>
            {props.message}
            <button>delete</button>
        </li>
    )
}

export default TodoItem
