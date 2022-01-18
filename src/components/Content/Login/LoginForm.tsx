import React from "react";
import s from "./LoginStyle.module.scss";
import {SubmitHandler, useForm} from "react-hook-form";
import {LoginDataRequestType} from "../../Redux/authReducer";
import { Navigate } from "react-router-dom";
import Preloader from "../../Preloader/Preloader";

type Inputs = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
};
type LoginFormPropsType = {
    login: (loginData: LoginDataRequestType) => void
    isFetching: boolean
    isAuth: boolean
    id:number | null
}

export const LoginForm = (props: LoginFormPropsType) => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        props.login(data)
    };
    if (props.isAuth) {
        return <Navigate to={`/profile/${props.id}`}/>
    }

    return (
        <>
            {props.isFetching
                ? <Preloader />
                : <form className={s.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                    <label>Login</label>
                    <input placeholder={'Login'} className={s.input}
                           defaultValue={''} {...register('email', {required: true})}/>
                    {errors.email && <span>This field is required</span>}
                    <label>Password</label>
                    <input className={s.input} placeholder={'Password'} type={'password'} {...register('password', {required: true})} />
                    {errors.password && <span>This field is required</span>}
                    <div className={s.checkBox}>
                        <input type={'checkbox'} {...register('rememberMe')} />
                        <span>remember me</span>
                    </div>
                    <input type={'submit'}/>
                </form>
            }

        </>
    )
}