import axios from "axios";

const UPDATE_NEW_TASK = 'UPDATE_NEW_TASK'
const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const COMPLITED_TASK = 'COMPLITED_TASK'
export const ALL_COMPLITED_TASK = 'ALL_COMPLITED_TASK'
export const ALL_DELETE_TASK = 'ALL_DELETE_TASK'
const SET_TODOS = 'SET_TODOS'
const ADD_TODO_STARTED = 'ADD_TODO_STARTED'
const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE'
const ADD_TODO_ALL_SUCCESS = 'ADD_TODO_ALL_SUCCESS'
const ADD_TODO_COMPLITED_SUCCESS = 'ADD_TODO_COMPLITED_SUCCESS'
const ADD_TODO_DELETE_SUCCESS = 'ADD_TODO_DELETE_SUCCESS'

let initialState = {
    tasks: [],
    newTask: '',
    loading: false,
    error: null,
}

const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_TASK:
            return {
                ...state,
                newTask: action.text
            }

        // case ADD_TASK:
        //     return {
        //         ...state,
        //         newTask: '',
        //         tasks: [...state.tasks, {id: Date.now(), message: state.newTask, complited: false,}]
        //     }

        case DELETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks.filter((task) => task.id !== action.id)]
            }


        case COMPLITED_TASK:
            return {
                ...state,
                tasks: [...state.tasks.map((task) => {
                    if (task.id === action.id) {
                        task.complited = !task.complited
                    }
                    return task
                })]
            }

        case ALL_COMPLITED_TASK:
            return {
                ...state,
                tasks: [...state.tasks.map((task) => {
                    task.complited = true
                    return task
                })]
            }

        case ALL_DELETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks.filter((task) => !task.complited)]
            }

        case SET_TODOS:
            return {
                ...state,
                tasks: action.todos
            }

        case ADD_TODO_STARTED:
            return {
                ...state,
                loading: true
            }

        case ADD_TODO_SUCCESS:
            return {
                ...state,
                newTask: '',
                tasks: [...state.tasks,  action.todo],
                loading: false
            }
        case ADD_TODO_ALL_SUCCESS:
            return {
                ...state,
                tasks: action.todos.map(task => task),
                loading: false
            }

        case ADD_TODO_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }

        case ADD_TODO_COMPLITED_SUCCESS:
            return {
                ...state,
                tasks: [...state.tasks.map((task) => {
                    if (task.id === action.id) {
                        task.complited = action.complited
                    }
                    return task
                })]
            }
        case ADD_TODO_DELETE_SUCCESS:
            console.log(action.id)
            return {
                ...state,
                tasks: [...state.tasks.filter(task => task.id !== action.id)]
            }

        default:
            return state
    }
}


export const updateNewTaskActionCreator = (text) => {
    return {type: UPDATE_NEW_TASK, text: text}
}

export const addTaskActionCreator = () => {
    return {type: ADD_TASK}
}

export const deleteTaskActionCreator = (taskID) => {
    return {type: DELETE_TASK, id: taskID}
}

export const complitedTaskActionCreator = (taskID) => {
    return {type: COMPLITED_TASK, id: taskID,}
}

export const AllComplitedTaskActionCreator = () => {
    return {type: ALL_COMPLITED_TASK}
}

export const AllDeleteTaskActionCreator = () => {
    return {type: ALL_DELETE_TASK}
}

export const setTodosActionCreator = (todos) => {
    return {type: SET_TODOS, todos}
}

export const addTodoStarted = () => {
    return {type: ADD_TODO_STARTED}
}

export const addTodoSuccess = (todo) => {
    return {type: ADD_TODO_SUCCESS, todo}
}

export const addTodoFailure = (error) => {
    return {type: ADD_TODO_FAILURE, error}
}

export const addTodoALLSuccess = (todos) => {
    return {type: ADD_TODO_ALL_SUCCESS, todos}
}

export const addTodoComplitedSuccess = (todoID, complited) => {
    return {type: ADD_TODO_COMPLITED_SUCCESS, id: todoID, complited}
}

export const addTodoDeleteSuccess = (todoID) => {
    return {type: ADD_TODO_DELETE_SUCCESS, id: todoID}
}

export const addTodoActionCreator = (message) => {
    return (dispatch) => {
        dispatch(addTodoStarted());
        axios
            .post(`/todo`, {
                complited: false,
                message
            })
            .then(response => {
                dispatch(addTodoSuccess(response.data));
            })
            .catch(err => {
                dispatch(addTodoFailure(err.message));
            })
    }
}

export const addTodoAllActionCreator = () => {
    return (dispatch) => {
        dispatch(addTodoStarted());
        axios
            .get(`/todo`)
            .then(response => {
                dispatch(addTodoALLSuccess(response.data));
            })
            .catch(err => {
                dispatch(addTodoFailure(err.message));
            })
    }
}

export const addTodoComplitedActionCreator = (todoID, todoComplited) => {
    return (dispatch) => {
        dispatch(addTodoStarted());
        axios
            .put(`/todo/${todoID}`, {id: todoID, complited: todoComplited})
            .then(response => {
                dispatch(addTodoComplitedSuccess(response.data));
            })
            .catch(err => {
                dispatch(addTodoFailure(err.message));
            })
    }
}

export const deleteTodoActionCreator = (todoID) => {
    return (dispatch) => {
        dispatch(addTodoStarted());
        axios
            .delete(`/todo/${todoID}`)
            .then(response => {
                dispatch(addTodoDeleteSuccess(todoID));
            })
            .catch(err => {
                dispatch(addTodoFailure(err.message));
            })
    }
}


export default TaskReducer