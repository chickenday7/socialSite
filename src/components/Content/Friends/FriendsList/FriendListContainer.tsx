import React from "react";
import {connect} from "react-redux";
import {
    changePageThunkCreator,
    followThunkCreator,
    FriendsStateType,
    getUsersThunkCreator,
    unfollowThunkCreator
} from "../../../Redux/friendsReducer";
import FriendList from "./FriendList";
import {ThunkDispatch} from "redux-thunk";
import {StateType} from "../../../Redux/redux-store";
import {compose} from "redux";


type FriendsList = MapDispatchToPropsType & MapStateToPropsType
class FriendListContainer extends React.Component<FriendsList> {
    componentDidMount() {
        this.props.getUsers(this.props.friendsPage.currentPage, this.props.friendsPage.pageSize)
    }
    onCurrentPage = (newCurrentPage: number) => {

        this.props.changePage(newCurrentPage, this.props.friendsPage.pageSize)
    }


    render() {
        let pagesCount = Math.ceil(this.props.friendsPage.totalUsers / this.props.friendsPage.pageSize);
        let arrayCount = [];
        for (let i = 1; i <= pagesCount; i++) {
            arrayCount.push(i)
        }


        return (
            <FriendList arrayCount={arrayCount}
                        pagesCount={pagesCount}
                        onCurrentPage={this.onCurrentPage}
                        {...this.props}
                        currentPage={this.props.friendsPage.currentPage}

            />
        )
    }
}


type MapStateToPropsType = {
    friendsPage: FriendsStateType
}
let mapStateToProps = (state: StateType):MapStateToPropsType => {
    return {
        friendsPage:state.friendsPage,
    }
}


type MapDispatchToPropsType = {
    getUsers: (currentPage:number,pageSize:number) => void
    changePage: (newCurrentPage:number,pageSize:number) => void
    follow: (id:number) => void
    unfollow: (id:number) => void
}
let mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>):MapDispatchToPropsType => {
    return {
        getUsers: (currentPage: number, pageSize: number) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
        changePage: (newCurrentPage: number, pageSize: number) => {
            dispatch(changePageThunkCreator(newCurrentPage, pageSize))
        },
        follow: (id:number) => {
            dispatch(followThunkCreator(id))
        },
        unfollow: (id:number) => {
            dispatch(unfollowThunkCreator(id))
        }
    }
}






export default compose<React.ComponentType>(
    connect<MapStateToPropsType,MapDispatchToPropsType,{},StateType>(mapStateToProps, mapDispatchToProps)
)(FriendListContainer)