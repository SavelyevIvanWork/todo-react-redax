import React from 'react'
import TodoItem from "./TodoItem/TodoItem";
import './Todo.css'
import TodoFilter from "./TodoFilter/TodoFilter";
import {useMemo} from "react";
import {useEffect} from "react";
import {SORT_ALL_TASK, SORT_COMPLETED_TASK, SORT_CURRENT_TASK} from "../../../actions";
import {
    addTodoActionCreator,
    addTodoAllActionCreator,
    completedTaskActionCreator,
    deleteTaskActionCreator,
    deleteTodoActionCreator,
    todoCompletedAC,
    updateNewTaskActionCreator
} from "../../../action-creators/task-action-creator";
import {connect} from "react-redux";
import Preloader from '../../../Image/loading-svgrepo-com.svg';
import '../../../Image/dustbin.svg'
import { debounce } from 'lodash';

const getVisibleTodos = (filterTodos, todos) => {
    switch (filterTodos) {
        case SORT_ALL_TASK:
            return todos
        case SORT_COMPLETED_TASK:
            return todos.filter(t => t.completed)
        case SORT_CURRENT_TASK:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filterTodos)
    }
}

const Todo = ({tasks, filterTodos, onDeleteTaskClick, onCompletedTaskClick,
                  onNewTaskChange, newTask, addAllTodo, todoCompleted, todoDelete, addTodo, loading
              }) => {

    useEffect(() => {
        addAllTodo()
    }, []);

    const memo = useMemo(() => getVisibleTodos(filterTodos, tasks), [filterTodos, tasks])


    const validation = (value) => {
        const reg = /^\s*$/;
        return !reg.test(value)
    }

    const onAddTask = (e) => {
        if (e.key === 'Enter' && validation(newTask)) {
            addTodo(newTask)
        }
    }

    const onAddTaskDebounce = debounce(onAddTask,500)

    const onChangeInput = (e) => {
        const text = e.target.value
        onNewTaskChange(text)
    }
    return (
        <div className="todo">
            {
                loading && <div className='loader-wrapper'>
                    <div className="loader"></div>
                </div>
            }
            {/*<img src={Preloader} alt=""/>*/}
            <div className="todo__input-wrapper">
                <input
                    className="todo__input"
                    type="text"
                    placeholder='Enter your task name here'
                    value={newTask}
                    onChange={onChangeInput}
                    onKeyDown={onAddTaskDebounce}
                    autoFocus={true}
                />
            </div>
            <div className="todo__list">
                <ul>
                    {
                        memo.map((task) => <TodoItem
                            task={task}
                            onDeleteTaskClick={onDeleteTaskClick}
                            onCompletedTaskClick={onCompletedTaskClick}
                            todoCompleted={todoCompleted}
                            todoDelete={todoDelete}
                            key={task.id}
                        />)
                    }

                </ul>
            </div>
            {tasks.length > 0 && <TodoFilter/>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.TaskReducer.tasks,
        newTask: state.TaskReducer.newTask,
        filterTodos: state.FilterReducer,
        loading: state.TaskReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteTaskClick: (taskID) => {
            dispatch(deleteTaskActionCreator(taskID))
        },

        onCompletedTaskClick: (taskID) => {
            dispatch(completedTaskActionCreator(taskID))
        },

        onNewTaskChange: (text) => {
            dispatch(updateNewTaskActionCreator(text))
        },

        addTodo: (message) => {
            dispatch(addTodoActionCreator(message))
        },

        addAllTodo: () => {
            dispatch(addTodoAllActionCreator())
        },

        todoCompleted: (todoID, todoCompleted) => {
            dispatch(todoCompletedAC(todoID, todoCompleted))
        },

        todoDelete: (todoID) => {
            dispatch(deleteTodoActionCreator(todoID))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)

