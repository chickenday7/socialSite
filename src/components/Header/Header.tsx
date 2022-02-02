import React from "react";
import {Link} from "react-router-dom";
import {AuthReducerType} from "../Redux/authReducer";
import user from './../../img/user/user.png'
import s from './HeaderStyle.module.scss'
import {Avatar, Button} from "@material-ui/core";
import {useStyles} from "./HeaderStyles";
import logo from './../../img/header/logo.svg'

type HeaderPropsType = {
    auth:AuthReducerType
    logout:()=>void
    ownerPhoto:string | null | undefined
}

const Header = (props: HeaderPropsType) => {
    const onLogoutMe = () => {
      props.logout()
    }
    const classes = useStyles()
    return (
        <header className={s.header}>
            <div className={s.wrapperLogo}>
                <img className={s.logo} src={logo}/>
                <span className={s.titleSite}>Paper</span>
            </div>
            <div className={s.header__profile}>
                {props.auth.isAuth
                    ? <div className={s.wrapperRightMenu}>
                        {props.ownerPhoto ? <Avatar className={classes.small} src={props.ownerPhoto}/> : <Avatar className={classes.small} src={user}/>}
                        <span className={s.ownerName}>{props.auth.login}</span>
                        <Button className={classes.buttonLogout} onClick={onLogoutMe}><span className={s.linkToLogout}>Log out</span></Button>
                    </div>
                    : <Button className={classes.buttonLogin} ><Link className={s.linkToLogin} to={'/login'}>Login</Link></Button>
                }

            </div>
        </header>
    )


}


export default Header