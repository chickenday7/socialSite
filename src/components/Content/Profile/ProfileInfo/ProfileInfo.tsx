import React from "react";
import Preloader from "../../../Preloader/Preloader";
import {ProfileType} from "../../../Redux/profileReducer";
import {ProfilePhoto} from "./ProfilePhoto/ProfilePhoto";
import {ProfileDescription} from "./ProfileDescription/ProfileDescription";



type ProfileInfoProps = {
    profile: ProfileType | null,
    status: string | undefined
    updateStatus: (status:string)=> void
    isOwner:boolean
    ownerID:number
}
const ProfileInfo = (props:ProfileInfoProps) => {

    if (props.profile !== null){
        return (
            <div className={'profile'} >
                <ProfilePhoto photos={props.profile.photos} />
                <ProfileDescription profile={props.profile}
                                    status={props.status}
                                    updateStatus={props.updateStatus}
                                    isOwner={props.isOwner}
                                    ownerID={props.ownerID}

                />
            </div>
        )
    }else{
        return <Preloader />
    }



}

export default ProfileInfo;