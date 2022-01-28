import React from "react";
import userPhoto from "../../../../../img/user/user.png";


type ProfilePhotoPropsType = {
    photos: { small: null | string, large: null | string }
}
export const ProfilePhoto = (props:ProfilePhotoPropsType) => {

    return(
        <div className={'profile__photo'}>
            <img alt={'userPhoto'} src={props.photos.large === null ? userPhoto : props.photos.large} />
        </div>
    )
}