import React from "react"
import Header from "./Header/Header";
import Todo from "./Todo/Todo";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const TodoApp = ({isFetching}) => {
    return (
        <div className="wrapper">
            <Header />
            <Todo />
            {!isFetching && <Redirect from='/' to='/login'/>}
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.FormReducer.isFetching,
    }
}

export default connect(mapStateToProps) (TodoApp)
