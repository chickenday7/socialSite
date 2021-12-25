import React from "react";
import FriendsTitle from "./FriendsTitle/FriendsTitle";
import FriendsFilter from "./FriendFilter/FriendsFilter";
import FriendsListContainer from "./FriendsList/FriendListContainer";



const Friends = (props:any) =>{
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
    //    friendsPage = {props.friendsPage}
        //                             follow = {props.follow}
        //                             unfollow = {props.unfollow}
        //                             setUsers = {props.setUsers}
        //                             pageSize = {props.pageSize}
        //                             totalUsers = {props.totalUsers}
        //                             currentPage = {props.currentPage}
        //                             updatePage = {props.updatePage}
        //                             setCountUsers ={props.setCountUsers}
    )
}

export default Friends