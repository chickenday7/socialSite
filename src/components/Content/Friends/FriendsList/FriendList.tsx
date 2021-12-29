import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";
import Preloader from "../../../Preloader/Preloader";
import {FriendsStateType} from "../../../Redux/friendsReducer";
import {UserType} from "../../../../API/api";

type FriendListType = {
    friendsPage:FriendsStateType
    arrayCount: Array<number>
    pagesCount: number
    getUsers: (currentPage:number,pageSize:number) => void
    changePage: (newCurrentPage:number,pageSize:number) => void
    follow: (id:number) => void
    unfollow: (id:number) => void
    onCurrentPage:(newCurrentPage:number) => void

}
let FriendList = (props: FriendListType) => {

    const listCountPages:React.ReactNode = props.arrayCount.filter((elem: number) => {
            if (elem <= 5) {
                return elem
            } else if (elem > props.pagesCount - 2) {
                return elem
            }
        }).map((elem: number,index:number) => {
            if (elem === props.pagesCount - 1) {
                return <span key={index} className={'pages__points'}>. . . . . . . .</span>
            } else {
                return <span key={index} className={props.friendsPage.currentPage === elem ? "activePage" : 'disabledPage'}
                             onClick={() => {props.onCurrentPage(elem)
                             }}>{elem}</span>
            }
        })

    return (
        <>
            <div  className={'myFriends__list'}>
                {props.friendsPage.isPreloader ? <Preloader /> : undefined}
                <div className={"pages"}>
                    {listCountPages}
                </div>


                {props.friendsPage.users.map((elem:UserType) => {
                    return <FriendsItem user={elem}
                                        key={elem.id}
                                        follow={props.follow}
                                        unfollow={props.unfollow}
                                        isFollowing ={props.friendsPage.isFollowing}
                                        isPreloader = {props.friendsPage.isPreloader}

                    />
                })
                }
            </div>
        </>
    )
}

export default FriendList