import React from "react";
import "./TodoItem.css"
import '../../../../Image/dustbin.svg'

const TodoItem = (props) => {
    let className = ''
    if (props.task.complited === true) {
        className = 'active'
    }

    const onChecked = (e) => {
        props.addTodoComplited(props.task.id, props.task.complited = !props.task.complited)
    }

    return (
        <li className={`todo-list__item ${className}`}
            onClick={onChecked}
            id={props.task.id}
        >
            <span className={`todo-list__text`}>{props.task.message}</span>
            <button className='todo-item__button'
                    onClick={(event) => {
                        event.stopPropagation()
                        props.todoDelete(props.task.id)
                    }}>
                <span>delete</span>
            </button>
        </li>
    )
}




export default TodoItem
