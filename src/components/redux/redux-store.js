import {combineReducers, createStore} from "redux";
import TaskReducer from "./TaskReducer";


let reducers = combineReducers({
    todo: TaskReducer,
})

let store = createStore(reducers);

window.store = store
export default store