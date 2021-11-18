import React, {FC} from "react";
import Posts from "./Posts/Posts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {IState} from "../../Redux/state";


const Profile:FC<IState> = (props) => {
    return (
        <div className={'content'}>
            <div className={'content__image'}>
                {/*какая -то картинка*/}
            </div>
            <ProfileInfo />
            <Posts postsData={props.postsData} />
        </div>
    )
};


export default Profile;