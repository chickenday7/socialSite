import React, {FC, ReactNode} from "react";
import UserItem from "./UserItem/UserItem";



const Users:any = (props:any) => {


    let dialogComponent:any = props.dialogsData!.map((elem:any) => {
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