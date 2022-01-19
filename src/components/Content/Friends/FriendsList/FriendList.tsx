import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";
import Preloader from "../../../Preloader/Preloader";
import {FriendsStateType} from "../../../Redux/friendsReducer";
import {UserType} from "../../../../API/api";
import {PagesSwitcher} from "./FriendsItem/PagesSwitcher";

type FriendListType = {
    friendsPage: FriendsStateType
    arrayCount: Array<number>
    pagesCount: number
    getUsers: (currentPage: number, pageSize: number) => void
    changePage: (newCurrentPage: number, pageSize: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    onCurrentPage: (newCurrentPage: number) => void
    currentPage: number

}
let FriendList = (props: FriendListType) => {



    return (
        <>
            <div className={'myFriends__list'}>
                {props.friendsPage.isPreloader ? <Preloader/> : undefined}
                <div className={"pages"}>
                    <PagesSwitcher currentPage={props.currentPage}
                                   arrayCount={props.arrayCount}
                                   pagesCount={props.pagesCount}
                                   onCurrentPage={props.onCurrentPage}
                    />
                </div>
                {props.friendsPage.users.map((elem: UserType) => {
                    return <FriendsItem user={elem}
                                        key={elem.id}
                                        follow={props.follow}
                                        unfollow={props.unfollow}
                                        isFollowing={props.friendsPage.isFollowing}
                                        isPreloader={props.friendsPage.isPreloader}
                    />
                })
                }
            </div>
        </>
    )
}

export default FriendList