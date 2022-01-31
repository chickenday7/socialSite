import React from "react";
import {NavLink} from "react-router-dom";
import {AuthReducerType} from "../Redux/authReducer";
import user from './../../img/user/user.png'
import s from './HeaderStyle.module.scss'

type HeaderPropsType = {
    auth:AuthReducerType
    logout:()=>void
    ownerPhoto:string | null | undefined
}

const Header = (props: HeaderPropsType) => {
    const onLogoutMe = () => {
      props.logout()
    }
    console.log(props.auth.isAuth)
    return (
        <header className={'header'}>
            <div className={'header__logo'}>logo</div>
            <div className={'header__profile'}>
                {props.auth.isAuth
                    ? <div className={s.wrapperRightMenu}>
                        {props.ownerPhoto ? <img className={s.headerPhoto} src={props.ownerPhoto}/> : <img className={s.headerPhoto}  src={user}/>}
                        {props.auth.login}
                        <button onClick={onLogoutMe}>logout</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )


}


export default Header