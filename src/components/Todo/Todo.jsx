import React from 'react'
import TodoItem from "./TodoItem/TodoItem";
import TodoFilter from "./TodoFilter/TodoFilter";


const Todo = (props) => {

    let todoItem = props.tasks.map((task) => <TodoItem
            task={task}
            onDeleteTaskClick={props.onDeleteTaskClick}
            onComplitedTaskClick={props.onComplitedTaskClick}/>)

    let onAddTask = (e) => {
        if (e.key === 'Enter' && props.newTask !== '') {
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
                    value={props.newTask}
                    onChange={onChangeInput}
                    onKeyDown={onAddTask}
                />
            </div>
            <div className="todo__list">
                <ul>
                    {todoItem}
                </ul>
            </div>

            { props.tasks.length > 0
                ? <TodoFilter
                    onAllBtnClick={props.onAllBtnClick}
                    onComplitedBtnClick={props.onComplitedBtnClick}
                    tasks={props.tasks}
                />
                : ''
            }
        </div>
    )
}

export default Todo