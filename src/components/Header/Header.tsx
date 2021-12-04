import React from "react";
import {NavLink} from "react-router-dom";


const Header = (props: any) => {
    console.log(props)
    return (
        <header className={'header'}>
            <div className={'header__logo'}>logo</div>
            <div className={'header__profile'}>
                {props.auth.isAuth === true
                    ? props.auth.login
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )


}


export default Header