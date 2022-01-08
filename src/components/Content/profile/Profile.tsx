import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import {ProfileType} from "../../Redux/profileReducer";


type PropsProfileType = {
    profile: ProfileType | null
    status: string | undefined
    updateStatus: (status:string)=> void
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