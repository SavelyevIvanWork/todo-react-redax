import React from "react";
import './App.css';
import TodoApp from "./components/TodoApp/TodoApp";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import FormAuthorizationContainer from "./components/FormAuthorization/FormAuthorizationContainer";
import {connect} from "react-redux";

const App = ({isFetching}) => {
    return (
        <BrowserRouter>
                <Route path='/login' render={() => <FormAuthorizationContainer />} /> {/*Возвращает компонент в виде тега*/}
                <Route path='/todo' render={() => <TodoApp />} />

                {isFetching ? <Redirect from='/' to='/todo'/>
                            : <Redirect from='/' to='/login'/>}

        </BrowserRouter>
    )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.FormReducer.isFetching
    }
}

export default connect(mapStateToProps)(App)
