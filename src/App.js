import React from "react";
import './App.css';
import TodoApp from "./components/TodoApp/TodoApp";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import About from "./components/About/About";
import FormAuthorization from "./components/FormAuthorization/FormAuthorization";

const App = ({isFetching}) => {
    return (
        <BrowserRouter>
                <Route path='/about' render={() => <About />} />
                <Route path='/login' render={() => <FormAuthorization />} /> {/*Возвращает компонент в виде тега*/}
                <Route path='/todo' render={() => <TodoApp />} />

                {isFetching && <Redirect from='/' to='/todo'/>}
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.FormReducer.isFetching
    }
}

export default connect(mapStateToProps)(App)
