const UPDATE_NEW_TASK = 'UPDATE_NEW_TASK'
const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const COMPLITED_TASK = 'COMPLITED_TASK'

let initialState = {
    tasks:[
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

        case DELETE_TASK: {
            let stateCopy = {...state}
            stateCopy.tasks = [...state.tasks]
            stateCopy.tasks.filter((task) => task.id === action.id)
            return stateCopy
        }

        case COMPLITED_TASK: {
            let stateCopy = {...state}
            stateCopy.tasks = [...state.tasks]
            stateCopy.tasks.find((task) => task.complited === !state.tasks.complited)
            return stateCopy
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

export const deleteTaskActionCreator = (id) => {
    return {type: DELETE_TASK, id: id}
}

export const complitedTaskActionCreator = (id) => {
    return {type: COMPLITED_TASK, id: id,}
}

export default TaskReducer