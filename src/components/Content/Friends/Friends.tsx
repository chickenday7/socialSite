import React from "react";
import FriendsTitle from "./FriendsTitle/FriendsTitle";
import FriendsFilter from "./FriendFilter/FriendsFilter";
import FriendsListContainer from "./FriendsList/FriendListContainer";



const Friends = () =>{
    return(
        <div className={'myFriends'}>

            {/*myFriends__title*/}
            <FriendsTitle />
            {/*myFriends__title*/}

            {/*myFriends__list*/}
            <FriendsListContainer/>
            {/*myFriends__list*/}

            {/*myFriends__filter*/}
            <FriendsFilter />
            {/*myFriends__filter*/}
        </div>

    )
}

export default Friends