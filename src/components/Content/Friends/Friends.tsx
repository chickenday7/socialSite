import React from "react";
import FriendsTitle from "./FriendsTitle/FriendsTitle";
import FriendsList from "./FriendsList/FriendsList";
import FriendsFilter from "./FriendFilter/FriendsFilter";



const Friends = (props:any) =>{
    return(
        <div className={'myFriends'}>

            {/*myFriends__title*/}
            <FriendsTitle />
            {/*myFriends__title*/}

            {/*myFriends__list*/}
            <FriendsList friendsPage = {props.friendsPage}
                         follow = {props.follow}
                         unfollow = {props.unfollow}
                         setUsers = {props.setUsers}
                         pageSize = {props.pageSize}
                         totalUsers = {props.totalUsers}
                         currentPage = {props.currentPage}
                         updatePage = {props.updatePage}
                         setCountUsers ={props.setCountUsers}
            />
            {/*myFriends__list*/}

            {/*myFriends__filter*/}
            <FriendsFilter />
            {/*myFriends__filter*/}
        </div>
    )
}

export default Friends