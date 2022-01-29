import React, {useState} from "react";
import {ProfileType} from "../../../../Redux/profileReducer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {FullInfo} from "./FullInfo/FullInfo";
import s from './ProfileDescription.module.scss'
import {EditProfileForm} from "./EditProfileForm/EditProfileForm";
import SuperButton from "../../../../../SuperComponents/c2-SuperButton/SuperButton";
import {EditProfileType} from "../../../../../API/api";


type AboutProfilePropsType = {
    profile: ProfileType
    status: string | undefined
    updateStatus: (status: string) => void
    isOwner: boolean
    ownerID: number
    editProfile: (profile: EditProfileType, ownerId: number) => void
}
export const ProfileDescription = (props: AboutProfilePropsType) => {
    let [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }
    let [editProfileMode, setEditProfileMode] = useState(false)

    const toggleEditMode = () => {
        setEditProfileMode(!editProfileMode)
    }

    const myName = props.profile!.fullName.split(' ').map((elem: string) => {
        let newElem = elem.split('')
        newElem[0] = newElem[0].toUpperCase()
        return newElem.join('')
    }).join(' ')

    return (
        <div className={s.wrapperDescription}>
            <div className={s.headerDescription}>
                <span className={s.profileName}>{myName}</span>
                {props.isOwner && <span onClick={toggleEditMode} className={s.profileEdit}>Edit profile</span>}
            </div>
            {editProfileMode
                ? <EditProfileForm toggleEditMode={toggleEditMode}
                                   profile={props.profile}
                                   ownerID={props.ownerID}
                                   editProfile={props.editProfile}
                />
                : <>
                    <ProfileStatus status={props.status}
                                   updateStatus={props.updateStatus}
                                   isOwner={props.isOwner}
                    />
                    <div className={s.itemProfileInfo}>
                        <span className={s.titleItem}>About me:</span>
                        <span className={s.descriptionItem}>{props.profile.aboutMe ? props.profile.aboutMe : '-'}</span>
                    </div>
                    {collapsed && <FullInfo profile={props.profile}/>}
                    <SuperButton onClick={toggleCollapsed}>More info</SuperButton>
                </>
            }

        </div>
    )
}