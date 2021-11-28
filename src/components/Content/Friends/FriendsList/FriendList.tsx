import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";
import Preloader from "../../../Preloader/Preloader";


let FriendList = (props: any) => {
    // let myFriend__List:any = React.createRef()

    return (
        <>
            <div  className={'myFriends__list'}>
                {props.isPreloader === true ? <Preloader />   : undefined}
                <div className={"pages"}>
                    {props.arrayCount.filter((elem: any) => {
                        if (elem <= 5) {
                            return elem
                        } else if (elem > props.pagesCount - 2) {
                            return elem
                        }
                    }).map((elem: any,index:any) => {
                        if (elem === props.pagesCount - 1) {
                            return <span key={index} className={'pages__points'}>. . . . . . . .</span>
                        } else {
                            return <span key={index} className={props.currentPage === elem ? "activePage" : 'disabledPage'}
                                         onClick={() => {props.onCurrentPage(elem)
                                         }}>{elem}</span>
                        }

                    })}
                </div>
                {props.friendsPage.map((elem: any) => {
                    return <FriendsItem name={elem.name}
                                        status={elem.status}
                                        location={elem.location}
                                        followed={elem.followed}
                                        key={elem.id}
                                        id={elem.id}
                                        photo={elem.photos}
                                        follow={props.follow}
                                        unfollow={props.unfollow}

                    />
                })
                }
            </div>
        </>
    )
}

export default FriendList