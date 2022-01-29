import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import {ProfileType} from "../../Redux/profileReducer";
import {EditProfileType} from "../../../API/api";


type PropsProfileType = {
    profile: ProfileType | null
    status: string | undefined
    updateStatus: (status:string)=> void
    isOwner:boolean
    ownerID:number
    editProfile:(profile:EditProfileType,ownerId:number)=>void
    uploadProfilePhoto:(photo:File,ownerId:number)=>void
}

const Profile = (props:PropsProfileType) => {
    return (
        <div className={'content'}>
            <ProfileInfo {...props} />
            <PostsContainer/>
        </div>
    )
};


export default Profile;