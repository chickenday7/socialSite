import React from "react";
import {NavLink} from "react-router-dom";
import {AuthReducerType} from "../Redux/authReducer";

type HeaderPropsType = {
    auth:AuthReducerType
    authMe:()=>void
    logout:()=>void
}

const Header = (props: HeaderPropsType) => {
    const onLogoutMe = () => {
      props.logout()
    }

    return (
        <header className={'header'}>
            <div className={'header__logo'}>logo</div>
            <div className={'header__profile'}>
                {props.auth.isAuth
                    ? <div>
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