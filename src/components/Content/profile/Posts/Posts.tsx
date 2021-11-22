import React, {FC} from "react";
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
                      dispatch = {props.dispatch}
            />


            {/*class posts__item*/}
            <AddedPostsArray postsData={props.profilePage.postsData}
                             dispatch = {props.dispatch}
            />
            {/*class posts__item*/}

        </div>
    )

}

export default Posts;