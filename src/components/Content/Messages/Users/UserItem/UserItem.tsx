import React,{FC, PropsWithChildren} from "react";
import {NavLink} from "react-router-dom";



let activeStyle:any = {             // тут надо спросить!!!!!!!!!!!!!!!!!!!//
    textDecoration: "none",
    color: "orange",
};



const UserItem:any = (props:any) =>{
    return(
        <div className={'user'}>
            <div className={'user__name'}>
                <NavLink to={"/messages/" + props.id} style = {({ isActive }) =>
                    isActive ? activeStyle : undefined
                }> {props.name}</NavLink>
            </div>
        </div>
    )
};

export default UserItem;