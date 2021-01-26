const UPDATE_NEW_TASK = 'UPDATE_NEW_TASK'
const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const COMPLITED_TASK = 'COMPLITED_TASK'
export const ALL_COMPLITED_TASK = 'ALL_COMPLITED_TASK'
export const ALL_DELETE_TASK = 'ALL_DELETE_TASK'

let initialState = {
    tasks: [],
    newTask: '',
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

export default TaskReducer