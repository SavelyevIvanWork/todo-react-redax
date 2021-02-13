import {SET_VISIBILITY_FILTER} from "../actions";

export const sortAllTaskAC = (id) => {
    return {type: SET_VISIBILITY_FILTER, filter: id}
}

export const sortCompletedTaskAC = (id) => {
    return {type: SET_VISIBILITY_FILTER, filter: id}
}

export const sortCurrentTaskAC = (id) => {
    return {type: SET_VISIBILITY_FILTER, filter: id}
}
