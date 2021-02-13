import {
    ADD_TODO_ALL_SUCCESS,
    ADD_TODO_FAILURE,
    ADD_TODO_STARTED,
    ADD_TODO_SUCCESS,
    ALL_TASK_DELETE, ALL_TODO_COMPLETED_SUCCESS, ALL_TODO_DELETE_SUCCESS,
    COMPLETED_TASK,
    DELETE_TASK,
    SET_TODOS, TODO_COMPLETED_SUCCESS, TODO_DELETE_SUCCESS,
    UPDATE_NEW_TASK
} from "../actions";
import axios from "axios";
import {authorizationFailureAC} from "./form-action-creator";


export const addTodoStarted = () => {
    return {type: ADD_TODO_STARTED}
}
export const todoFailure = (error) => {
    return {type: ADD_TODO_FAILURE, error}
}


export const updateNewTaskActionCreator = (text) => {
    return {type: UPDATE_NEW_TASK, text: text}
}

export const deleteTaskActionCreator = (taskID) => {
    return {type: DELETE_TASK, id: taskID}
}

export const completedTaskActionCreator = (taskID) => {
    return {type: COMPLETED_TASK, id: taskID,}
}



export const AllDeleteTaskActionCreator = () => {
    return {type: ALL_TASK_DELETE}
}

export const setTodosActionCreator = (todos) => {
    return {type: SET_TODOS, todos}
}



//Добавляем одну таску
export const addTodoSuccess = (todo) => {
    return {type: ADD_TODO_SUCCESS, todo}
}
export const addTodoActionCreator = (message) => (dispatch) => {
    dispatch(addTodoStarted());
    axios
        .post(`/todo`, {
            completed: false,
            message
        }, {headers: {"Token": localStorage.getItem("Token")}})
        .then(response => {
            dispatch(addTodoSuccess(response.data));
        })
        .catch(err => {
            dispatch(authorizationFailureAC(err.message, err.response.data));
        })
}

//  Добавляем все таски при загрузке
export const addTodoALLSuccess = (todos) => {
    return {type: ADD_TODO_ALL_SUCCESS, todos}
}
export const addTodoAllActionCreator = () => (dispatch) => {
    dispatch(addTodoStarted());
    axios
        .get(`/todo`, {headers: {"Token": localStorage.getItem("Token")}})
        .then(response => {
            dispatch(addTodoALLSuccess(response.data));
        })
        .catch(err => {
            dispatch(authorizationFailureAC(err.message, err.response.data));
        })
}

// Комплитим одну таску
export const todoCompletedSuccess = (todo) => {
    return {type: TODO_COMPLETED_SUCCESS, todo}
}
export const todoCompletedAC = (todoID, todoCompleted) => (dispatch) => {
    dispatch(addTodoStarted());
    axios
        .put(`/todo/${todoID}`, {
            id: todoID,
            completed: !todoCompleted,
        }, {headers: {"Token": localStorage.getItem("Token")}})
        .then(response => {
            console.log(response.data)
            dispatch(todoCompletedSuccess(response.data));
        })
        .catch(err => {
            dispatch(authorizationFailureAC(err.message, err.response.data));
        })
}

// Комплитим все таски
export const allTodoCompletedSuccess = () => {
    return {type: ALL_TODO_COMPLETED_SUCCESS}
}
export const allTodoCompletedAC = () => (dispatch) => {
    dispatch(addTodoStarted());
    axios
        .post(`/todo/all-todo-completed`,{},{headers: {"Token": localStorage.getItem("Token")}} )
        .then(response => {
            dispatch(allTodoCompletedSuccess(response.data));
        })
        .catch(err => {
            dispatch(authorizationFailureAC(err.message, err.response.data));
        })
}

// Удаляем одну таску
export const todoDeleteSuccess = (todoID) => {
    return {type: TODO_DELETE_SUCCESS, id: todoID}
}
export const deleteTodoActionCreator = (todoID) => (dispatch) => {
    dispatch(addTodoStarted());
    axios
        .delete(`/todo/${todoID}`, {headers: {"Token": localStorage.getItem("Token")}})
        .then(response => {
            dispatch(todoDeleteSuccess(todoID));
        })
        .catch(err => {
            dispatch(authorizationFailureAC(err.message, err.response.data));
        })
}

// Удаляем все таски
export const allTodoDeleteSuccess = (todoID) => {
    return {type: ALL_TODO_DELETE_SUCCESS, id: todoID}
}
export const AllTodoDeleteActionCreator = () => (dispatch) => {
    dispatch(addTodoStarted());
    axios
        .post(`/todo/all-todo-delete`, {completed: true}, {headers: {"Token": localStorage.getItem("Token")}})
        .then(response => {
            dispatch(allTodoDeleteSuccess());
        })
        .catch(err => {
            dispatch(authorizationFailureAC(err.message, err.response.data));
        })
}