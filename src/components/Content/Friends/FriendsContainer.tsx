import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../Redux/friendsReducer";


let mapStateToProps = (state:any) => {
    return{
        friendsPage: state.friendsPage.users
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
        }
    }
}




const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer