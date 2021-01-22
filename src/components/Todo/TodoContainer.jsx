import {connect} from "react-redux";
import Todo from "./Todo";
import {addTaskActionCreator, complitedTaskActionCreator, updateNewTaskActionCreator} from "../redux/TaskReducer";


let mapStateToProps = (state) => {
    return {
        tasks: state.todo.tasks,
        newTask: state.todo.newTask,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddTaskClick: () => {
            dispatch(addTaskActionCreator())
        },

        onComplitedTaskClick: (id) => {
            dispatch(complitedTaskActionCreator(id))
        },

        onNewTaskChange: (text) => {
            dispatch(updateNewTaskActionCreator(text))
        },
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps) (Todo)

export default TodoContainer