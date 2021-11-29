import React, {FC} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ImageProfile from "./HeaderProfile/HeaderProfile";
import PostsContainer from "./Posts/PostsContainer";


const Profile:any = (props:any) => {
    return (
        <div className={'content'}>
            <ImageProfile  />
            <ProfileInfo {...props} />
            <PostsContainer/>
        </div>
    )
};


export default Profile;