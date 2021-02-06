import React from "react";
import style from './FormAuthorization.module.css'

const FormAuthorization = ({username, password, messages, error, userNameUpdate, passwordUpdate, userRegistration, userLogin}) => {

    const userNameUpdateHandler = (e) => {
        const username = e.target.value
        userNameUpdate(username)
    }

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
        <>
            <h1 className={style.title}>Please login or register</h1>
            <div className={style.wrapper}>
                <form action="">
                    <div className={style.item}>
                        <label className={style.label} htmlFor="">User name:</label>
                        <input
                            className={style.input}
                            type="text"
                            value={username}
                            placeholder='Enter your user name'
                            onChange={userNameUpdateHandler}
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
                            className={`${style.btn}`}>
                            onClick={userLoginHandler}
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
        </>
    )


}

export default FormAuthorization