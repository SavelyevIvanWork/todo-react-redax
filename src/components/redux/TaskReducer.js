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

        case ADD_TASK:
            return {
                ...state,
                newTask: '',
                tasks: [...state.tasks, {id: Date.now(), message: state.newTask, complited: false,}]
            }

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
                tasks: action.todo,
                loading: false
            }

        case ADD_TODO_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
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


export const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
});

export const addTodoSuccess = (todo) => ({
    type: ADD_TODO_SUCCESS, todo
});

export const addTodoFailure = (error) => ({
    type: ADD_TODO_FAILURE, error
});


export default TaskReducer