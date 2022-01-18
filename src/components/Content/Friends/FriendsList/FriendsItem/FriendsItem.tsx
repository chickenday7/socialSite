import React from "react";
import userPhoto from "../../../../../img/user/user.png"
import {NavLink} from "react-router-dom";
import {UserType} from "../../../../../API/api";

type FriendsItemType = {
    user:UserType
    follow: (id:number) => void
    unfollow: (id:number) => void
    isPreloader: boolean
    isFollowing:Array<number>
}
const FriendsItem = (props:FriendsItemType) => {
    const onUnfollow = () => {
        props.unfollow(props.user.id)
    }
    const onFollow = () => {
        props.follow(props.user.id)
    }
    const checkDisable:boolean =  props.isFollowing.some((id:number) => id == props.user.id)



    return (
        <div className={'blockFriend'}>
            <NavLink to={`/profile/${props.user.id}`}>
                <div className={'blockFriend__photo'}>
                    <img src={props.user.photos.small !== null ? props.user.photos.small : userPhoto}/>
                </div>
            </NavLink>
            <div className={'blockFriend__description'}>
                <div className={'description__name'}>{props.user.name} </div>
                <div className={'description__stat'}>{props.user.status}</div>
                <div className={'description__country'}>Country</div>
                <div className={'description__city'}>City</div>
            </div>
            <div className={'blockFriend__button'}>
                {props.user.followed ?
                    <div   className={'buttonAdd'}>
                        <button onClick={onUnfollow} disabled={checkDisable} >UNFOLLOW</button>
                    </div>
                    :
                    <div  className={'buttonAdd'}>
                        <button onClick={onFollow} disabled={checkDisable}  >FOLLOW</button>
                    </div>}
            </div>
        </div>
    )
}
export default FriendsItem