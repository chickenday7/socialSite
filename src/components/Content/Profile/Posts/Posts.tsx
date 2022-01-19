import React from "react";
import AddPosts from "./AddPosts/AddPosts";
import AddedPostsArray from "./AddedPosts/AddedPostsArray";
import PostsTitle from "./PostsTitile/PostsTitle";


const Posts:any = (props:any) => {

    return (
        <div className={'posts'}>

            {/*posts__title BOTTOM*/}
            <PostsTitle />
            {/*posts__title UP*/}


            <AddPosts newPostText = {props.profilePage.newPostText}
                      postChange = {props.postChange}
                      addPost = {props.addPost}
            />


            {/*class posts__item*/}
            <AddedPostsArray postsData={props.profilePage.postsData}
                             addLike = {props.addLike}
            />
            {/*class posts__item*/}

        </div>
    )

}

export default Posts;