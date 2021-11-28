import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";
import {followAC, newPageAC, setUsersAC, totalUsersAC, unFollowAC} from "../../Redux/friendsReducer";


let mapStateToProps = (state:any) => {
    console.log(state.friendsPage)
    return{
        pageSize: state.friendsPage.pageSize,
        friendsPage: state.friendsPage.users,
        totalUsers: state.friendsPage.totalUsers,
        currentPage: state.friendsPage.currentPage
    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        follow: (id:any) => {
            dispatch(followAC(id))
        },
        unfollow: (id:any) => {
            dispatch(unFollowAC(id))
        },
        setUsers: (newArrayUsers:any) => {
            dispatch(setUsersAC(newArrayUsers))
        },
        updatePage: (newCurrentPage:any) => {
            dispatch(newPageAC(newCurrentPage))
        },
        setCountUsers: (setTotalUsers:any) => {
            dispatch(totalUsersAC(setTotalUsers))
        }
    }
}




const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer