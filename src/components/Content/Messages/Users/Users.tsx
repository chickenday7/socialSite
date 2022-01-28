import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.scss"
import {UserType} from "../../../Redux/messagesReducer";


interface IUsersProps {
    arrayUsers: Array<UserType>
}

const Users = (props: IUsersProps) => {


    let arrayUsers: React.ReactNode = props.arrayUsers
        ? props.arrayUsers.map((elem) => {
            return <UserItem name={elem.name} id={elem.id} key={elem.id}/>;
        })
        : <UserItem name={'Test User'} id={999}/>


    return (
        <div className={s.wrapperUsers}>
            <div className={s.title}>
                USERS
            </div>
            <div className={s.users}>
                {arrayUsers}
            </div>
        </div>

    )
};

export default Users;