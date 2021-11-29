import React from "react";

import {connect} from "react-redux";
import {
    followAC,
    newPageAC,
    setUsersAC,
    togglePreloaderAC,
    totalUsersAC,
    unFollowAC
} from "../../../Redux/friendsReducer";
import axios from "axios";
import FriendList from "./FriendList";


class FriendsListAPI extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.togglePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            headers: {
                'API-KEY': '8c93655a-bf70-40c8-9c2a-4929b88b2e49'
            }
        }).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setCountUsers(response.data.totalCount);
            this.props.togglePreloader(false)

        });

    }

    onCurrentPage = (newCurrentPage: any) => {
        this.props.updatePage(newCurrentPage);
        this.props.togglePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newCurrentPage}&count=${this.props.pageSize}`, {
            headers: {
                'API-KEY': '8c93655a-bf70-40c8-9c2a-4929b88b2e49'
            }
        }).then(response => {

            this.props.setUsers(response.data.items);
            this.props.togglePreloader(false);
        });

    }


    render() {
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
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        isPreloader={this.props.isPreloader}
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
        isPreloader: state.friendsPage.isPreloader
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (id: any) => {
            dispatch(followAC(id))
        },
        unfollow: (id: any) => {
            dispatch(unFollowAC(id))
        },
        setUsers: (newArrayUsers: any) => {
            dispatch(setUsersAC(newArrayUsers))
        },
        updatePage: (newCurrentPage: any) => {
            dispatch(newPageAC(newCurrentPage))
        },
        setCountUsers: (setTotalUsers: any) => {
            dispatch(totalUsersAC(setTotalUsers))
        },
        togglePreloader: (actionPreloader: any) => {
            dispatch(togglePreloaderAC(actionPreloader))
        }
    }
}


const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsListAPI)

export default FriendsListContainer