import React from "react";
import s from "./LoginStyle.module.scss";
import {SubmitHandler, useForm} from "react-hook-form";
import {LoginDataRequestType} from "../../Redux/authReducer";
import {Navigate} from "react-router-dom";
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
    toggleError:(stateError:boolean)=>void
    authError:boolean
}

export const LoginForm = (props: LoginFormPropsType) => {
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>()


    const checkChanged = () => {
      props.toggleError(false)
    }

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
                    <input onClick={checkChanged} placeholder={'Login'} className={s.input}
                           defaultValue={''} {...register('email', {required: true})}/>
                    {errors.email && <span>This field is required</span>}
                    <label>Password</label>
                    <input onClick={checkChanged} className={s.input} placeholder={'Password'} type={'password'} {...register('password', {required: true})} />
                    {errors.password && <span>This field is required</span>}
                    <div className={s.checkBox}>
                        <input type={'checkbox'} {...register('rememberMe')} />
                        <span>remember me</span>
                    </div>
                    {props.authError && <span style={{color:'red'}}>Email or password is wrong</span>}
                    <input type={'submit'}/>
                </form>
            }

        </>
    )
}