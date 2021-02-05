import {connect} from "react-redux";
import FormAuthorization from "./FormAuthorization";
import {passwordUpdateAC, registrationAC, userNameUpdateAC} from "../redux/FormReducer";

const FormAuthorizationContainer = ({username, password, messages, error, userNameUpdate, passwordUpdate, userRegistration}) => {
    return <FormAuthorization userNameUpdate={userNameUpdate}
                              passwordUpdate={passwordUpdate}
                              username={username}
                              password={password}
                              messages={messages}
                              error={error}
                              userRegistration={userRegistration}
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FormAuthorizationContainer)
