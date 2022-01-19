import React from "react";
import userPhoto from "../../../../img/user/user.png"
import Preloader from "../../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {ProfileType} from "../../../Redux/profileReducer";


type ProfileInfoProps = {
    profile: ProfileType | null,
    status: string | undefined
    updateStatus: (status:string)=> void
    isOwner:boolean
}
const ProfileInfo = (props:ProfileInfoProps) => {

    if (props.profile !== null){

        const myName = props.profile.fullName.split(' ').map((elem:string)=>{
            let newElem = elem.split('')
            newElem[0] = newElem[0].toUpperCase()
            return newElem.join('')
        }).join(' ')

        return (
            <div className={'profile'} >
                <div className={'profile__photo'}>
                    <img alt={'userPhoto'} src={props.profile.photos.large === null ? userPhoto : props.profile.photos.large} />
                </div>
                <div className={'descriptionProfile'}>
                    <div className={'descriptionProfile__nickname'}>{myName}</div>
                    <ProfileStatus status={props.status}
                                    updateStatus={props.updateStatus}
                                   isOwner={props.isOwner}

                    />
                    <div className={'descriptionProfile__status'}>About me:{props.profile.aboutMe}</div>
                </div>
            </div>
        )
    }else{
        return <Preloader />
    }



}

export default ProfileInfo;