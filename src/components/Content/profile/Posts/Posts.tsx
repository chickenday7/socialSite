import React, {FC} from "react";
import AddPosts from "./AddPosts/AddPosts";
import AddedPosts from "./AddedPosts/AddedPosts";
import {IState} from "../../../Redux/state";
import {ObjectsPostsData} from "../../../Redux/state";



const Posts:FC<IState> = (props) => {

    let dialogsComponent:React.ReactNode = props.postsData!.map((elem) => {
        return <AddedPosts news = {elem.news} like = {elem.likeCount} />
    });




    return (
        <div className={'posts'}>
            <div className={'posts__title'}>My posts</div>
            <AddPosts />
            <div className={'addedPosts'}>
                {/*class posts__item*/}
                {dialogsComponent}
                {/*class posts__item*/}
            </div>
        </div>
    )
}

export default Posts;