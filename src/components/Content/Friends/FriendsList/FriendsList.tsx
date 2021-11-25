import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";
import  axios from "axios";


const FriendsList = (props:any) => {

    if (props.friendsPage.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users",{
            headers: {
                'API-KEY':'8c93655a-bf70-40c8-9c2a-4929b88b2e49'
            }
        }).then(response => {
            debugger;
        })
    }


    let friendsList:any = props.friendsPage.map((elem:any) => {
        return <FriendsItem name = {elem.name}
                            status = {elem.status}
                            location = {elem.location}
                            followed = {elem.followed}
                            id = {elem.id}
                            follow = {props.follow}
                            unfollow = {props.unfollow}

        />
    })

    return (
        <div className={'myFriends__list'}>
            {friendsList}
        </div>


)
}

export default FriendsList;