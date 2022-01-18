import React from "react";

import {LoginForm} from "./LoginForm";
import {LoginDataRequestType} from "../../Redux/authReducer";

type LoginPropsType = {
    login: (loginData: LoginDataRequestType) => void
    isFetching: boolean
    isAuth: boolean
    id:number | null
}
const Login = (props: LoginPropsType) => {

    return (
        <div>
            <h1> LOG IN PAGE</h1>
            <LoginForm login={props.login}
                       isFetching={props.isFetching}
                       isAuth={props.isAuth}
                       id={props.id}
            />
        </div>
    )
}

export default Login