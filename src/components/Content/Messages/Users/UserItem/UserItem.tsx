import React,{FC, PropsWithChildren} from "react";
import {NavLink} from "react-router-dom";

type Props = {
    name:string
    id:string
}
let activeStyle:any = {             // тут надо спросить!!!!!!!!!!!!!!!!!!!//
    textDecoration: "none",
    color: "orange",
};



const UserItem:FC<Props> = (props:PropsWithChildren<Props>) =>{
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