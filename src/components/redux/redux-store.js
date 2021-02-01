import {applyMiddleware, combineReducers, createStore} from "redux";
import TaskReducer from "./TaskReducer";
import FilterReducer from "./FilterReducer";
import thunk from "redux-thunk";



let reducers = combineReducers({
    TaskReducer,
    FilterReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

// localStorage['state'] ? JSON.parse(localStorage.getItem('state')) : {}
store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
})

window.store = store
console.log(window.store.getState())

export default store

