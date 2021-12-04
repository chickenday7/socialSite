import React from "react";
import userPhoto from "../../../../../img/user/user.png"
import {NavLink} from "react-router-dom";


const FriendsItem = (props: any) => {

    let onUnfollow = () => {
        props.unfollow(props.id)
    }
    let onFollow = () => {
        props.follow(props.id)
    }
    return (
        <div key={props.id} className={'blockFriend'}>
            <NavLink to={'/profile/' + props.id}>
                <div className={'blockFriend__photo'}>
                    <img src={props.photo.small !== null ? props.photo.small : userPhoto}/>
                </div>
            </NavLink>
            <div className={'blockFriend__description'}>
                <div className={'description__name'}>{props.name} </div>
                <div className={'description__stat'}>{props.status}</div>
                <div className={'description__country'}>Country</div>
                <div className={'description__city'}>City</div>
            </div>
            <div className={'blockFriend__button'}>
                {props.followed ?
                    <div   className={'buttonAdd'}>
                        <button onClick={onUnfollow} disabled={props.isFollowing.some((id:any) => id == props.id)} >UNFOLLOW</button>
                    </div>
                    :
                    <div  className={'buttonAdd'}>
                        <button onClick={onFollow} disabled={props.isFollowing.some((id:any) => id == props.id)}  >FOLLOW</button>
                    </div>}
            </div>
        </div>
    )
}
export default FriendsItem