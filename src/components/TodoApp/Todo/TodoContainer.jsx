import React from 'react'
import {
    addTaskActionCreator,
    addTodoActionCreator,
    addTodoAllActionCreator,
    addTodoComplitedActionCreator,
    addTodoDeleteActionCreator,
    complitedTaskActionCreator,
    deleteTaskActionCreator, deleteTodoActionCreator,
    updateNewTaskActionCreator
} from "../../redux/TaskReducer";
import {connect} from "react-redux";
import Todo from "./Todo";

const TodoContainer = (props) => {
        return <Todo tasks={props.tasks}
                     filterTodos={props.filterTodos}
                     onAddTaskClick={props.onAddTaskClick}
                     onDeleteTaskClick={props.onDeleteTaskClick}
                     onComplitedTaskClick={props.onComplitedTaskClick}
                     onNewTaskChange={props.onNewTaskChange}
                     addTodo={props.addTodo}
                     newTask={props.newTask}
                     addAllTodo={props.addAllTodo}
                     addTodoComplited={props.addTodoComplited}
                     todoDelete={props.todoDelete}
        />
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

        addTodo: (message) => {
            dispatch(addTodoActionCreator(message))
        },

        addAllTodo: () => {
            dispatch(addTodoAllActionCreator())
        },

        addTodoComplited: (todoID, todoComplited) => {
            dispatch(addTodoComplitedActionCreator(todoID, todoComplited))
        },

        todoDelete: (todoID) => {
            dispatch(deleteTodoActionCreator(todoID))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TodoContainer)
