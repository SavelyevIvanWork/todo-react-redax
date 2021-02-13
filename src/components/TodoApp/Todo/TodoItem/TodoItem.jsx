import React from "react";
import "./TodoItem.css"
import '../../../../Image/dustbin.svg'

const TodoItem = ({todoCompleted, task, todoDelete}) => {
    const onChecked = () => {
        todoCompleted(task.id, task.completed)
    }

    return (
        <li className={task.completed ? `todo-list__item active` : `todo-list__item`}
            onClick={onChecked}
            id={task.id}
        >
            <span className={`todo-list__text`}>{task.message}</span>
            <button className='todo-item__button'
                    onClick={(event) => {
                        event.stopPropagation()
                        todoDelete(task.id)
                    }}>
                <span>delete</span>
            </button>
        </li>
    )
}


export default TodoItem
