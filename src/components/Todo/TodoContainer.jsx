import React from 'react'
import {
    addTaskActionCreator, addTodoStarted,
    complitedTaskActionCreator,
    deleteTaskActionCreator, setTodosActionCreator,
    updateNewTaskActionCreator
} from "../redux/TaskReducer";
import {connect} from "react-redux";
import Todo from "./Todo";
import * as axios from 'axios'

class TodoContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:1234/todo`)
            .then(response => {
                this.props.setTodos(response.data)
            })
    }
    // setTodo = () => {
    //     return axios.get(`http://localhost:1234/todo`)
    //         .then(response => {
    //             this.props.setTodos(response.data)
    //         })
    // }
    render() {
        return <Todo tasks={this.props.tasks}
                     filterTodos={this.props.filterTodos}
                     onAddTaskClick={this.props.onAddTaskClick}
                     onDeleteTaskClick={this.props.onDeleteTaskClick}
                     onComplitedTaskClick={this.props.onComplitedTaskClick}
                     onNewTaskChange={this.props.onNewTaskChange}
                     // setTodo={this.setTodo}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        tasks: state.TaskReducer.tasks,
        newTask: state.TaskReducer.newTask,
        filterTodos: state.FilterReducer,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddTaskClick: () => {
            dispatch(addTaskActionCreator())
        },

        onDeleteTaskClick: (taskID) => {
            dispatch(deleteTaskActionCreator(taskID))
        },

        onComplitedTaskClick: (taskID) => {
            dispatch(complitedTaskActionCreator(taskID))
        },

        onNewTaskChange: (text) => {
            dispatch(updateNewTaskActionCreator(text))
        },

        setTodos: (todos) => {
            dispatch(setTodosActionCreator(todos))
        },

        addTodo: ({ title, userId }) => {
            return dispatch => {
                dispatch(addTodoStarted());

                axios
                    .post(`https://jsonplaceholder.typicode.com/todos`, {
                        title,
                        userId,
                        completed: false
                    })
                    .then(res => {
                        dispatch(addTodoSuccess(res.data));
                    })
                    .catch(err => {
                        dispatch(addTodoFailure(err.message));
                    })
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TodoContainer)
