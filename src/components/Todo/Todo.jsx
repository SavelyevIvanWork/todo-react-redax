import React from 'react'
import TodoItem from "./TodoItem/TodoItem";

const Todo = (props) => {

    let onComplitedTask = (id) => {
        props.onComplitedTaskClick(id)
    }

    let onDeleteAddTask = (e) => {

    }

    const taskElement = props.tasks
        .map((task) => <TodoItem message={task.message} id={task.id} onComplitedTask={onComplitedTask} DeleteAddTask={onDeleteAddTask}/>)


    let onAddTask = (e) => {
        if (e.key === 'Enter') {
            return props.onAddTaskClick()
        }
    }


    let onChangeInput = (e) => {
        let text = e.target.value
        props.onNewTaskChange(text)

    }
    return (
        <div className="todo">
            <div className="todo__input-wrapper">
                <input
                    className="todo__input"
                    type="text"
                    placeholder='Enter your task name here'
                    onChange={onChangeInput}
                    onKeyDown={onAddTask}
                />
            </div>
            <div className="todo__list">
                <ul>
                    {taskElement}
                </ul>

            </div>
        </div>
    )
}

export default Todo