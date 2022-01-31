import React, {useState} from "react";
import Preloader from "../../../Preloader/Preloader";
import {ProfileType} from "../../../Redux/profileReducer";
import {ProfilePhoto} from "./ProfilePhoto/ProfilePhoto";
import {ProfileDescription} from "./ProfileDescription/ProfileDescription";
import {EditProfileType} from "../../../../API/api";
import s from './ProfileInfo.module.scss'


type ProfileInfoProps = {
    profile: ProfileType | null,
    status: string | undefined
    updateStatus: (status: string) => void
    isOwner: boolean
    ownerID: number
    editProfile: (profile: EditProfileType, ownerId: number) => void
    uploadProfilePhoto:(photo:File,ownerId:number)=>void
}
const ProfileInfo = (props: ProfileInfoProps) => {
    if (props.profile !== null) {
        return (
            <div className={s.wrapperProfile}>
                <ProfilePhoto photos={props.profile.photos}
                              ownerId={props.ownerID}
                              uploadProfilePhoto={props.uploadProfilePhoto}
                              isOwner={props.isOwner}
                />
                <ProfileDescription profile={props.profile}
                                    status={props.status}
                                    updateStatus={props.updateStatus}
                                    isOwner={props.isOwner}
                                    ownerID={props.ownerID}
                                    editProfile={props.editProfile}

                />
            </div>
        )
    } else {
        return <Preloader/>
    }


}

export default ProfileInfo;