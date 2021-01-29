import React from "react";
import './App.css';
import Todo from "./components/Todo/Todo";
import {connect} from "react-redux";

const App = () => {


    return (
        <div className="wrapper">
            <div className="title-wrapper">
                <h3 className="title">Your todo list</h3>
            </div>
            <Todo />
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
