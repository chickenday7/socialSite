import React, {ChangeEvent} from "react";
import userPhoto from "../../../../../img/user/user.png";
import s from './ProfilePhoto.module.scss'


type ProfilePhotoPropsType = {
    photos: { small: null | string, large: null | string }
    ownerId: number
    uploadProfilePhoto: (photo: File, ownerId: number) => void
    isOwner: boolean
}
export const ProfilePhoto = (props: ProfilePhotoPropsType) => {


    const test = (e: ChangeEvent<HTMLInputElement>) => {
        props.uploadProfilePhoto(e.currentTarget.files![0], props.ownerId)

    }

    return (
        <div className={s.wrapperPhoto}>
            <img alt={'userPhoto'} src={props.photos.large === null ? userPhoto : props.photos.large}/>
            {props.isOwner &&
                <div className={s.wrapperInputPhoto}>
                    <label className={s.uploadPhotoText}>Upload photo</label>
                    <input className={s.inputProfilePhoto}
                           title={'Upload profile photo'}
                           type={'file'}
                           onChange={test}
                           name={'profilePhoto'}
                    />

                </div>}

        </div>
    )
}