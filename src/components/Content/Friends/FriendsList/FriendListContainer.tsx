import React from "react";

import {connect} from "react-redux";
import {
    changePageThunkCreator,
    followThunkCreator,
    getUsersThunkCreator,
    unfollowThunkCreator
} from "../../../Redux/friendsReducer";
import FriendList from "./FriendList";


class FriendsListAPI extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onCurrentPage = (newCurrentPage: any) => {
        this.props.changePage(newCurrentPage, this.props.pageSize)
    }


    render() {
        console.log(this.props)
        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize);
        let arrayCount = [];
        for (let i = 1; i <= pagesCount; i++) {
            arrayCount.push(i)
        }
        return (
            <FriendList arrayCount={arrayCount}
                        pagesCount={pagesCount}
                        onCurrentPage={this.onCurrentPage}
                        friendsPage={this.props.friendsPage}
                        currentPage={this.props.currentPage}
                        isPreloader={this.props.isPreloader}
                        isFollowing={this.props.isFollowing}
                        follow = {this.props.follow}
                        unfollow={this.props.unfollow}
            />
        )
    }
}

let mapStateToProps = (state: any) => {
    return {
        pageSize: state.friendsPage.pageSize,
        friendsPage: state.friendsPage.users,
        totalUsers: state.friendsPage.totalUsers,
        currentPage: state.friendsPage.currentPage,
        isPreloader: state.friendsPage.isPreloader,
        isFollowing: state.friendsPage.isFollowing
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        getUsers: (currentPage: any, pageSize: any) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
        changePage: (newCurrentPage: any, pageSize: any) => {
            dispatch(changePageThunkCreator(newCurrentPage, pageSize))
        },
        follow: (id:any) => {
            dispatch(followThunkCreator(id))
        },
        unfollow: (id:any) => {
            dispatch(unfollowThunkCreator(id))
        }
    }
}


const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsListAPI)

export default FriendsListContainer