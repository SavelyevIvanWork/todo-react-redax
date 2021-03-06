import {applyMiddleware, combineReducers, createStore} from "redux";
import TaskReducer from "./reducers/TaskReducer";
import FilterReducer from "./reducers/FilterReducer";
import thunk from "redux-thunk";
import FormReducer from "./reducers/FormReducer";

const reducers = combineReducers({
    TaskReducer,
    FilterReducer,
    FormReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

// localStorage['state'] ? JSON.parse(localStorage.getItem('state')) : {}
// store.subscribe(() => {
//     localStorage.setItem('state', JSON.stringify(store.getState()))
// })

window.store = store
console.log(window.store.getState())

export default store

