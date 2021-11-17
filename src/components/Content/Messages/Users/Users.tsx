import React from "react";
import UserItem from "./UserItem/UserItem";


const Users = () => {
    let dialogsData:any = [{id:1, name:'Ilgiz'},
        {id:2,name:'Pavel'},
        {id:3,name:'Alena'},
        {id:4,name:'Olga'},
        {id:5,name:'Alexander'}
    ];



    let dialogComponent:any = dialogsData.map((elem: any) => {
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