import React from 'react'
import TodoItem from "./TodoItem/TodoItem";
import './Todo.css'
import TodoFilter from "./TodoFilter/TodoFilter";
import {SORT_ALL_TASK, SORT_COMPLITED_TASK, SORT_CURRENT_TASK} from "../../redux/FilterReducer";
import {useMemo} from "react";
import {useEffect, useState} from "react";


const Todo = (props) => {

    const [TODOS, setTODOS] = useState(props.tasks);
    useEffect(() => {
        props.addAllTodo()
    }, TODOS);


    let todos = props.tasks
    let filterTodos = props.filterTodos

    const getVisibleTodos = (filterTodos, todos) => {
        switch (filterTodos) {
            case SORT_ALL_TASK:
                return todos
            case SORT_COMPLITED_TASK:
                return todos.filter(t => t.complited)
            case SORT_CURRENT_TASK:
                return todos.filter(t => !t.complited)
            default:
                throw new Error('Unknown filter: ' + filterTodos)
        }
    }

    const memo = useMemo(() => getVisibleTodos(filterTodos, todos), [filterTodos, todos])

    const validation = (value) => {
        const reg = /^\s*$/;
        return reg.test(value) === false
    }

    let onAddTask = (e) => {
        if (e.key === 'Enter' && validation(props.newTask)) {
            console.log(props.newTask)
            return (
                props.addTodo(props.newTask)
            )
        }
    }

    let onChangeInput = (e) => {
        let text = e.target.value
        props.onNewTaskChange(text)
    }

const cl = () => {
    props.addTodo()
}
    return (
        <div className="todo">
            <button onClick={cl}>Add</button>
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
                    {
                        memo.map((task) => <TodoItem
                            task={task}
                            onDeleteTaskClick={props.onDeleteTaskClick}
                            onComplitedTaskClick={props.onComplitedTaskClick}
                            addTodoComplited={props.addTodoComplited}
                            todoDelete={props.todoDelete}
                            key={task.id}
                        />)
                    }

                </ul>
            </div>

            {props.tasks.length > 0 && <TodoFilter />}
        </div>
    )
}

export default Todo
