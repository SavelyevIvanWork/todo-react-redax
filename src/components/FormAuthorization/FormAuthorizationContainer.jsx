import {connect} from "react-redux";
import FormAuthorization from "./FormAuthorization";
import {loginAC, passwordUpdateAC, registrationAC, userNameUpdateAC} from "../redux/FormReducer";

const FormAuthorizationContainer = (
    {username, password, messages, error, userNameUpdate, passwordUpdate, userRegistration, userLogin}) => {
    return <FormAuthorization userNameUpdate={userNameUpdate}
                              passwordUpdate={passwordUpdate}
                              username={username}
                              password={password}
                              messages={messages}
                              error={error}
                              userRegistration={userRegistration}
                              userLogin={userLogin}
    />
}

const mapStateToProps = (state) => {
    return {
        username: state.FormReducer.username,
        password: state.FormReducer.password,
        isFetching: state.FormReducer.isFetching,
        messages: state.FormReducer.messages,
        error: state.FormReducer.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userNameUpdate: (username) => {
            dispatch(userNameUpdateAC(username))
        },

        passwordUpdate: (password) => {
            dispatch(passwordUpdateAC(password))
        },

        userRegistration: (username, password) => {
            dispatch(registrationAC(username, password))
        },

        userLogin: (username, password) => {
            dispatch(loginAC(username, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FormAuthorizationContainer)
