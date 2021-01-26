export const SORT_ALL_TASK = 'SORT_ALL_TASK'
export const SORT_COMPLITED_TASK = 'SORT_COMPLITED_TASK'
export const SORT_CURRENT_TASK = 'SORT_CURRENT_TASK'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

let baseFilter = SORT_ALL_TASK

const FilterReducer = (state = baseFilter, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter

        default:
            return state
    }

}

export const sortAllTaskAC = (id) => {
    return {type: SET_VISIBILITY_FILTER, filter: id}
}

export const sortComplitedTaskAC = (id) => {
    return {type: SET_VISIBILITY_FILTER, filter: id}
}

export const sortCurrentTaskAC = (id) => {
    return {type: SET_VISIBILITY_FILTER, filter: id}
}

export default FilterReducer
