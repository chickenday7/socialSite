import React from "react";
import Posts from "./Posts/Posts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={'content'}>
            <div className={'content__image'}>
                {/*какая -то картинка*/}
            </div>
            <ProfileInfo />
            <Posts />
        </div>
    )
};


export default Profile;