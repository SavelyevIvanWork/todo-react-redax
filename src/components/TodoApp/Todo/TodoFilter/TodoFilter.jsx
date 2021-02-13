import React from 'react'
import './TodoFilter.css'
import {connect} from "react-redux";
import {
    ALL_TASK_COMPLETED, ALL_TASK_DELETE,
    SORT_ALL_TASK,
    SORT_COMPLETED_TASK,
    SORT_CURRENT_TASK
} from "../../../../actions";
import {
    allTodoCompletedAC, AllTodoDeleteActionCreator
} from "../../../../action-creators/task-action-creator";
import {sortAllTaskAC, sortCompletedTaskAC, sortCurrentTaskAC} from "../../../../action-creators/filter-action-creator";

const TodoFilter = ({onAllBtnClick, onCurrentBtnClick, onCompletedBtnClick, allTaskCompleted, allTaskDelete, tasks, baseFilter, }) => {
    const btnHandler = (e) => {
        let id = e.target.id
        switch (id) {
            case SORT_ALL_TASK:
                onAllBtnClick(id)
                break
            case SORT_CURRENT_TASK:
                onCurrentBtnClick(id)
                break
            case SORT_COMPLETED_TASK:
                onCompletedBtnClick(id)
                break
            case ALL_TASK_COMPLETED:
                allTaskCompleted()
                break
            case ALL_TASK_DELETE:
                allTaskDelete()
                break
            default:
                onAllBtnClick(id)
        }
    }

    const taskCompleted = []
    tasks.filter((task) => {
        return task.completed && taskCompleted.push(task)
    })

    return (
        <div className="todo-filter">
            <button
                className={`btn todo-filter__btn--lightgrey todo-filter__btn--tasks-left`}
                id={ALL_TASK_COMPLETED}
                onClick={btnHandler}>
                <span>{tasks.length}</span> tasks left
            </button>

            <div className="todo-filter__btn-wrapper">
                <button
                    className={`btn todo-filter__btn ${baseFilter === SORT_ALL_TASK ? 'todo-filter__btn--active' : ''}`}
                    id={SORT_ALL_TASK}
                    onClick={btnHandler}
                >
                    All
                </button>
                <button
                    className={`btn todo-filter__btn ${baseFilter === SORT_CURRENT_TASK ? 'todo-filter__btn--active' : ''}`}
                    id={SORT_CURRENT_TASK}
                    onClick={btnHandler}
                >
                    ToDo
                </button>
                <button
                    className={`btn todo-filter__btn ${baseFilter === SORT_COMPLETED_TASK ? 'todo-filter__btn--active' : ''}`}
                    id={SORT_COMPLETED_TASK}
                    onClick={btnHandler}
                >
                    Completed
                </button>
            </div>
            {
                taskCompleted.length > 0 && <button
                    className={`btn todo-filter__btn--lightgrey todo-filter__btn--clear-completed`}
                    id={ALL_TASK_DELETE}
                    onClick={btnHandler}>
                    Clear completed
                </button>
            }

        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        tasks: state.TaskReducer.tasks,
        baseFilter: state.FilterReducer,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAllBtnClick: (id) => {
            dispatch(sortAllTaskAC(id))
        },

        onCompletedBtnClick: (id) => {
            dispatch(sortCompletedTaskAC(id))
        },

        onCurrentBtnClick: (id) => {
            dispatch(sortCurrentTaskAC(id))
        },

        allTaskCompleted: () => {
            dispatch(allTodoCompletedAC())
        },

        allTaskDelete: () => {
            dispatch(AllTodoDeleteActionCreator())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter)