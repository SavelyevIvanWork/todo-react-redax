import axios from "axios";
import {addTodoFailure, addTodoStarted, addTodoSuccess} from "./TaskReducer";

const USER_NAME_UPDATE = 'USER_NAME_UPDATE'
const USER_PASSWORD_UPDATE = 'USER_PASSWORD_UPDATE'
const LOADING_STARTED = 'LOADING_STARTED'
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE'

const initialState = {
    username: '',
    password: '',
    isFetching: false,
    loading: false,
    messages: {},
    error: '',
}

const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_NAME_UPDATE:
            return {
                ...state,
                username: action.username
            }
        case USER_PASSWORD_UPDATE:
            return {
                ...state,
                password: action.password
            }
        case LOADING_STARTED:
            return {
                ...state,
                loading: true,
            }
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: {...state.messages = action.messages}
            }
        case REGISTRATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                messages: {...state.messages = action.messages}
            }
        default:
            return state
    }
}

export const userNameUpdateAC = (username) => {
   return { type: USER_NAME_UPDATE, username}
}

export const passwordUpdateAC = (password) => {
    return { type: USER_PASSWORD_UPDATE, password}
}

export const loadingStartedAC = () => {
    return { type: LOADING_STARTED }
}

export const registrationSuccessAC = (messages) => {
    return { type: REGISTRATION_SUCCESS, messages }
}

export const registrationFailureAC = (error) => {
    return { type: REGISTRATION_FAILURE, error }
}

export const registrationAC = (username, password) => {
    return (dispatch) => {
        dispatch(loadingStartedAC());
        axios
            .post(`/todo/registration`, {
                username,
                password
            })
            .then(response => {
                dispatch(registrationSuccessAC(response.data));
            })
            .catch(err => {
                if (err.response) {
                    dispatch(registrationFailureAC(err.message))
                    dispatch(registrationSuccessAC(err.response.data))
                } else {
                    dispatch(registrationFailureAC(err.message))
                }
            })
    }
}



export default TaskReducer