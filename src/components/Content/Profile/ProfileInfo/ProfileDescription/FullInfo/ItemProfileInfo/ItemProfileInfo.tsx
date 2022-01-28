import React from "react";
import s from "../FullInfo.module.scss";


type ItemProfileInfoPropsType = {
    title:string
    description: string | null
}
const ItemProfileInfo = (props:ItemProfileInfoPropsType) => {

    return(
        <div className={s.itemProfileInfo}>
            <span className={s.titleItem}>About me:</span>
            <span>{props.description}</span>
        </div>
    )
}