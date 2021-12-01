import React from "react";
import userPhoto from "../../../../../img/user/user.png"
import {NavLink} from "react-router-dom";
import axios from "axios";


const FriendsItem = (props: any) => {
    let onUnfollow = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,{
            headers: {
                'API-KEY': '8c93655a-bf70-40c8-9c2a-4929b88b2e49'
            },
            withCredentials: true
        }).then((response) => {
            if (response.data.resultCode === 0){
                props.unfollow(props.id)
            }
        })
    }
    let onFollow = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,{},{
            headers: {
                'API-KEY': '8c93655a-bf70-40c8-9c2a-4929b88b2e49'
            },
            withCredentials: true
        }).then((response) => {
            if (response.data.resultCode === 0){
                props.follow(props.id)
            }
        })
    }

    return (
        <div key = {props.id} className={'blockFriend'}>
           <NavLink to={'/profile/' + props.id}> <div className={'blockFriend__photo'}>
                <img src={props.photo.small != null ? props.photo.small : userPhoto} />
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