import React, {FC, ReactNode} from "react";
import UserItem from "./UserItem/UserItem";
import {IState} from "../../../Redux/state";


const Users:FC<IState> = (props) => {


    let dialogComponent:ReactNode = props.dialogsData!.map((elem) => {
        return <UserItem name = {elem.name} id = {elem.id} />;
    })


    return (
        <div className={'dialogList'}>
            <div className={'dialogList__title'}>
                USERS
            </div>
            <div className={'dialogList__users'}>
                {dialogComponent}
            </div>
        </div>

    )
};

export default Users;