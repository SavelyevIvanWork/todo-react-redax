import React from 'react'

const TodoFilter = (props) => {
    return (
        <div className="todo-filter">
            <span>tasks left</span>
            <button
                className="todo-filter__btn todo-filter__btn--all todo-filter__btn--active"
                onClick={() => {props.onAllBtnClick()}}
            >
                All
            </button>
            <button
                className="todo-filter__btn todo-filter__btn--todo"
            >
                ToDo
            </button>
            <button
                className="todo-filter__btn todo-filter__btn--completed"
                onClick={() => {props.onComplitedBtnClick()}}
            >
                Completed
            </button>
            <span>Clear completed</span>
        </div>
    )
}

export default TodoFilter