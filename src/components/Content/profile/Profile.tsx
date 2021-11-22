import React, {FC} from "react";
import Posts from "./Posts/Posts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ImageProfile from "./HeaderProfile/HeaderProfile";


const Profile:any = (props:any) => {

    return (
        <div className={'content'}>
            <ImageProfile />
            <ProfileInfo />
            <Posts profilePage = {props.profilePage}
                   dispatch = {props.dispatch}
            />
        </div>
    )
};


export default Profile;