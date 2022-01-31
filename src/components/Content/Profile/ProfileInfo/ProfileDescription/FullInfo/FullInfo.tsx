import React from "react";
import {ProfileType} from "../../../../../Redux/profileReducer";
import s from './FullInfo.module.scss'


type FullInfoPropsType = {
    profile: ProfileType
}
export const FullInfo = (props: FullInfoPropsType) => {
    let listContacts = Object.entries(props.profile.contacts).map((elem, index) => {
        return (
            <div key={index} className={s.itemContacts}>
                <span className={s.titleItem}>{elem[0]}:</span>
                {elem[1]
                    ? <a href={elem[1]} className={s.descriptionItem}>{elem[1]}</a>
                    : <span className={s.descriptionItem} >-</span>
                }
            </div>
        )
    })
    return (

        <div className={s.wrapperFullInfo}>
            <div className={s.itemProfileInfo}>
                <span className={s.titleItem}>Full name:</span>
                <span className={s.descriptionItem}>{props.profile.fullName}</span>
            </div>
            <div className={s.itemProfileInfo}>
                <span className={s.titleItem}>Looking for a job:</span>
                <span className={s.descriptionItem}>{props.profile.lookingForAJob ? 'Yes' : 'No' }</span>
            </div>
            <div className={s.itemProfileInfo}>
                <span className={s.titleItem}>Contacts:</span>
                {listContacts}
            </div>
        </div>
    )
}