const SORT_ALL_TASK = 'SORT_ALL_TASK'
const SORT_COMPLITED_TASK = 'SORT_COMPLITED_TASK'

const BASE_FILTER = 'All'

const FilterReducer = (state = BASE_FILTER, action) => {
    switch (action.type) {
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

export const sortAllTaskAC = () => {
    return {type: SORT_ALL_TASK}
}

export const sortComplitedTaskAC = () => {
    return {type: SORT_COMPLITED_TASK}
}

export default FilterReducer