import React from "react";
import './App.css';
import {connect} from "react-redux";
import TodoContainer from "./components/Todo/TodoContainer";

const App = () => {
    return (
        <div className="wrapper">
            <div className="title-wrapper">
                <h3 className="title">Your todo list</h3>
            </div>
            <TodoContainer />
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        tasks: state.TaskReducer.tasks,
        baseFilter: state.FilterReducer.baseFilter,
    }
}

export default connect(mapStateToProps)(App)
