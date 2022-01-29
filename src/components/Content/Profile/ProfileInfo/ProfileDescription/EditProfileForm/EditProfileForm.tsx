import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import s from './EditProfuleForm.module.scss'
import {ProfileType} from "../../../../../Redux/profileReducer";
import {EditProfileType} from "../../../../../../API/api";
import {EditContactsForm} from "./EditContactsForm";

export type Test = {

    facebook?: null | string
    github?: null | string
    instagram?: null | string
    mainLink?: null | string
    twitter?: null | string
    vk?: null | string
    website?: null | string
    youtube?: null | string

}


export type Input = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: {
        facebook: string
        github: string
        instagram: string
        mainLink: string
        twitter: string
        vk: string
        website: string
        youtube: string
    }
    photos: {
        large: string,
        small: string,
    }
}
type EditProfileFormPropsType = {
    toggleEditMode: () => void
    profile: ProfileType
    ownerID: number
    editProfile: (profile: EditProfileType, ownerId: number) => void
}
export const EditProfileForm = (props: EditProfileFormPropsType) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Input>();
    const onSubmit: SubmitHandler<Input> = data => {
        console.log(data)
        data.userId = props.ownerID
        props.editProfile(data, data.userId)
        props.toggleEditMode()
    };

    const [localLookingForAJob, setLocalLookingForAJob] = useState<boolean>(props.profile.lookingForAJob)
    const changeStateLookingForAJob = () => {
        setLocalLookingForAJob(!localLookingForAJob)
    }

    return (
        <form className={s.wrapperEditProfile} onSubmit={handleSubmit(onSubmit)}>
            <label>FullName:</label>
            <input type={'text'} defaultValue={props.profile.fullName} {...register('fullName', {required: true})}/>
            <label>About me:</label>
            <textarea
                defaultValue={props.profile.aboutMe ? props.profile.aboutMe : ''}  {...register('aboutMe', {required: true})}/>
            <label>JOB</label>
            <div onClick={changeStateLookingForAJob}>
                <input type={'checkbox'} checked={localLookingForAJob} {...register('lookingForAJob')} />
            </div>
            <input
                defaultValue={props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : ''}
                {...register('lookingForAJobDescription', {required: true})} />
            <EditContactsForm contacts={props.profile.contacts}
                              register={register}
            />
            <input type={'submit'}/>

        </form>
    )
}