import React from "react";
import userPhoto from "../../../../img/user/user.png"
import Preloader from "../../../Preloader/Preloader";


const ProfileInfo = (props:any) => {


    if (props.fullName !== undefined){


        let myName = props.fullName.split(' ').map((elem:any)=>{
            let newElem = elem.split('')
            newElem[0] = newElem[0].toUpperCase()
            return newElem.join('')
        }).join(' ')


        return (
            <div className={'profile'} >
                <div className={'profile__photo'}>
                    <img src={props.photos.large === null ? userPhoto : props.photos.large} />
                </div>
                <div className={'descriptionProfile'}>
                    <div className={'descriptionProfile__nickname'}>{myName}</div>
                    <div className={'descriptionProfile__status'}>{props.aboutMe}</div>
                </div>
            </div>
        )
    }else{
        return <Preloader />
    }



}

export default ProfileInfo;