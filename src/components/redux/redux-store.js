import {combineReducers, createStore} from "redux";
import TaskReducer from "./TaskReducer";
import FilterReducer from "./FilterReducer";


let reducers = combineReducers({
    TaskReducer,
    FilterReducer
})

let store = createStore(reducers);

window.store = store
console.log(window.store.getState())
export default store