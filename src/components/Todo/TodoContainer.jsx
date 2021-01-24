import {connect} from "react-redux";
import Todo from "./Todo";
import {
    addTaskActionCreator,
    complitedTaskActionCreator,
    deleteTaskActionCreator, sortAllTaskAC, sortComplitedTaskAC,
    updateNewTaskActionCreator
} from "../redux/TaskReducer";


let mapStateToProps = (state) => {
    return {
        tasks: state.TaskReducer.tasks,
        newTask: state.TaskReducer.newTask,
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

        onAllBtnClick: () => {
            dispatch(sortAllTaskAC())
        },

        onComplitedBtnClick: () => {
            dispatch(sortComplitedTaskAC())
        },
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps) (Todo)

export default TodoContainer