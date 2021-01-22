import React from "react";
import './App.css';
import TodoContainer from "./components/Todo/TodoContainer";

const App = (props) => {
    return (
        <div className="wrapper">
            <div className="title-wrapper">
                <h3 className="title">Your todo list</h3>
            </div>
            <TodoContainer />
        </div>
    );
}


export default App;
