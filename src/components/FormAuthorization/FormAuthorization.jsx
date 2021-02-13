import style from './FormAuthorization.module.css'
import FormHeader from "./FormHeader/FormHeader";
import {loginAC, passwordUpdateAC, registrationAC, userNameUpdateAC} from "../../action-creators/form-action-creator";
import {connect} from "react-redux";
import {useCallback} from "react";


const FormAuthorization = (
    {username, password, messages, error, userNameUpdate, passwordUpdate, userRegistration, userLogin}) => {

    const userNameUp = useCallback((e) => userNameUpdate(e.target.value), [username])

    const userPasswordUpdateHandler = (e) => {
        const password = e.target.value
        passwordUpdate(password)
    }

    const userRegistrationHandler = (e) => {
        e.preventDefault()
        userRegistration(username, password)
    }

    const userLoginHandler = (e) => {
        e.preventDefault()
        userLogin(username, password)
    }

    const err = (messages) => {
        if (messages.errors) {
            const errors = messages.errors.errors.map(err => err.msg)
            console.log(errors)
            return errors
        }
    }

    return (
        <div className={style.app__wrapper}>
            <FormHeader />
            <div className={style.wrapper}>
                <form action="">
                    <div className={style.item}>
                        <label className={style.label} htmlFor="">User name:</label>
                        <input
                            className={style.input}
                            type="text"
                            value={username}
                            placeholder='Enter your user name'
                            onChange={userNameUp}
                            autoFocus={true}
                        />
                    </div>
                    <div className={style.item}>
                        <label className={style.label} htmlFor="">Password:</label>
                        <input
                            className={style.input}
                            type="password"
                            value={password}
                            placeholder='Please enter your password'
                            onChange={userPasswordUpdateHandler}
                        />
                    </div>
                    <div className={`${style.item} ${style.item__btn}`}>
                        <button
                            className={`${style.btn}`}
                            onClick={userLoginHandler}
                        >

                            Log in
                        </button>
                        <button
                            className={`${style.btn}`}
                            onClick={userRegistrationHandler}
                        >
                            Register
                        </button>
                    </div>
                </form>
                {
                    error ? <div>
                            <span className={`${style.message} ${style.message__error}`}>{messages.message}</span>
                            {messages.errors && err(messages).map(error => <span
                                className={`${style.message} ${style.message__error}`}>{error}</span>)}
                        </div>
                        : <span className={`${style.message}`}>{messages.message}</span>
                }
            </div>
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps) (FormAuthorization)
