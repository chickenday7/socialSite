import React from "react";
import FriendsTitle from "./FriendsTitle/FriendsTitle";
import FriendsFilter from "./FriendFilter/FriendsFilter";
import FriendsListContainer from "./FriendsList/FriendListContainer";



const Friends = () =>{
    return(
        <div className={'myFriends'}>
            <FriendsTitle />
            <FriendsListContainer/>
            <FriendsFilter />
        </div>

    )
}

export default Friends