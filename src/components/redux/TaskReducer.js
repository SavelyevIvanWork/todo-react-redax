const UPDATE_NEW_TASK = 'UPDATE_NEW_TASK'
const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const COMPLITED_TASK = 'COMPLITED_TASK'
const SORT_ALL_TASK = 'SORT_ALL_TASK'
const SORT_COMPLITED_TASK = 'SORT_COMPLITED_TASK'

let initialState = {
    tasks: [
        {message: 'BlaBla', id: 1, complited: false},
        {message: 'BlaBla1', id: 2, complited: false},
        {message: 'BlaBla2', id: 3, complited: false},
    ],
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

        case SORT_ALL_TASK:
            return {
                ...state,
                tasks: [...state.tasks]
            }

        case SORT_COMPLITED_TASK:
            debugger
            return {
                ...state,
                tasks: [...state.tasks.filter((task) => task.complited)]
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

export const sortAllTaskAC = () => {
    return {type: SORT_ALL_TASK}
}

export const sortComplitedTaskAC = () => {
    return {type: SORT_COMPLITED_TASK}
}

export default TaskReducer