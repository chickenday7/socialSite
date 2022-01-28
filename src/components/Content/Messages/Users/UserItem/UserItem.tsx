import React from "react";
import {NavLink} from "react-router-dom";
import s from "./UserItemStyle.module.scss"

interface IUserItemProps {
    id: number
    name: string
}

const UserItem = (props: IUserItemProps) => {

    return (
        <div className={s.user} key={props.id}>
            <div className={s.user__name}>
                <NavLink to={"/messages/" + props.id}
                         className={({isActive}) => isActive ? '' : ''}>
                    {props.name}
                </NavLink>
            </div>
        </div>
    )
};

export default UserItem;