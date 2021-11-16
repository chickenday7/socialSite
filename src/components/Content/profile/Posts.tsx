import React from "react";
import AddPosts from "./AddPosts";
import AddedPosts from "./AddedPosts";



const Posts = () => {
    return (
        <div className={'posts'}>
            <div className={'posts__title'}>My posts</div>
            <AddPosts />
            <div className={'addedPosts'}>
                <AddedPosts news = "the weather in St. Petersburg is suitable for studying" like = "99" />
                <AddedPosts news = "tear and sword c: " like = "2" />
                <AddedPosts news = "this is my first project on a react!" like = "5" />
            </div>
        </div>
    )
}

export default Posts;