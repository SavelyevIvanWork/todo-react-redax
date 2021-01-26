import React from 'react'
import './TodoFilter.css'
import {
    SORT_ALL_TASK,
    SORT_COMPLITED_TASK, SORT_CURRENT_TASK,
    sortAllTaskAC,
    sortComplitedTaskAC,
    sortCurrentTaskAC
} from "../../redux/FilterReducer";
import {connect} from "react-redux";
import {
    ALL_COMPLITED_TASK, ALL_DELETE_TASK,
    AllComplitedTaskActionCreator, AllDeleteTaskActionCreator
} from "../../redux/TaskReducer";

const TodoFilter = (props) => {

    let btnHandler = (e) => {
        let id = e.target.id
        switch (id) {
            case SORT_ALL_TASK:
                props.onAllBtnClick(id)
                break
            case SORT_CURRENT_TASK:
                props.onCurrentBtnClick(id)
                break
            case SORT_COMPLITED_TASK:
                props.onComplitedBtnClick(id)
                break
            case ALL_COMPLITED_TASK:
                props.onAllComplitedBtnClick()
                break
            case ALL_DELETE_TASK:
                props.onAllDeleteBtnClick()
                break
            default:
                props.onAllBtnClick(id)
        }
    }


    const taskComplited = []
    props.tasks.filter((task) => {
        return task.complited ? taskComplited.push(task) : null
    })

    return (
        <div className="todo-filter">
            <button
                className={`btn todo-filter__btn--lightgrey todo-filter__btn--tasks-left`}
                id={ALL_COMPLITED_TASK}
                onClick={btnHandler}>
                <span>{props.tasks.length}</span> tasks left
            </button>

            <div className="todo-filter__btn-wrapper">
                <button
                    className={`btn todo-filter__btn ${props.baseFilter === SORT_ALL_TASK ? 'todo-filter__btn--active' : ''}`}
                    id={SORT_ALL_TASK}
                    onClick={btnHandler}
                >
                    All
                </button>
                <button
                    className={`btn todo-filter__btn ${props.baseFilter === SORT_CURRENT_TASK ? 'todo-filter__btn--active' : ''}`}
                    id={SORT_CURRENT_TASK}
                    onClick={btnHandler}
                >
                    ToDo
                </button>
                <button
                    className={`btn todo-filter__btn ${props.baseFilter === SORT_COMPLITED_TASK ? 'todo-filter__btn--active' : ''}`}
                    id={SORT_COMPLITED_TASK}
                    onClick={btnHandler}
                >
                    Completed
                </button>
            </div>
            {
                taskComplited.length > 0
                ? <button
                        className={`btn todo-filter__btn--lightgrey todo-filter__btn--clear-complited`}
                        id={ALL_DELETE_TASK}
                        onClick={btnHandler}>
                        Clear completed
                    </button>
                : ''
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

        onComplitedBtnClick: (id) => {
            dispatch(sortComplitedTaskAC(id))
        },

        onCurrentBtnClick: (id) => {
            dispatch(sortCurrentTaskAC(id))
        },

        onAllComplitedBtnClick: () => {
            dispatch(AllComplitedTaskActionCreator())
        },

        onAllDeleteBtnClick: () => {
            dispatch(AllDeleteTaskActionCreator())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter)