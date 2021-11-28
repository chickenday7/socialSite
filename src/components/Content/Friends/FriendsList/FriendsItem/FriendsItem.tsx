import React from "react";
import userPhoto from "../../../../../img/user/user.png"


const FriendsItem = (props: any) => {
    let onUnfollow = () => {
        props.unfollow(props.id)
    }
    let onFollow = () => {
        props.follow(props.id)
    }

    return (
        <div key = {props.id} className={'blockFriend'}>
            <div className={'blockFriend__photo'}>
                <img src={props.photo.small != null ? props.photo.small : userPhoto} />
            </div>
            <div className={'blockFriend__description'}>
                <div className={'description__name'}>{props.name} </div>
                <div className={'description__stat'}>{props.status}</div>
                <div className={'description__country'}>Country</div>
                <div className={'description__city'}>City</div>
            </div>
            <div className={'blockFriend__button'}>
                {props.followed ?
                    <div  onClick={onUnfollow} className={'buttonAdd'}>
                        <div className={'buttonAdd__text'}>UNFOLLOW</div>
                    </div>
                    :
                    <div onClick={onFollow} className={'buttonAdd'}>
                        <div className={'buttonAdd__text'}>FOLLOW</div>
                    </div>}
            </div>
        </div>
    )
}
export default FriendsItem