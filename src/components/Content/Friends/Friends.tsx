import React from "react";
import FriendsTitle from "./FriendsTitle/FriendsTitle";
import FriendsList from "./FriendsList/FriendsList";
import FriendsFilter from "./FriendFilter/FriendsFilter";



const Friends = () =>{


    return(
        <div className={'myFriends'}>

            {/*myFriends__title*/}
            <FriendsTitle />
            {/*myFriends__title*/}

            {/*myFriends__list*/}
            <FriendsList />
            {/*myFriends__list*/}

            {/*myFriends__filter*/}
            <FriendsFilter />
            {/*myFriends__filter*/}
        </div>
    )
}

export default Friends