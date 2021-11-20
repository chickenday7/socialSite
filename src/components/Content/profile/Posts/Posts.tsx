import React, {FC} from "react";
import AddPosts from "./AddPosts/AddPosts";
import AddedPostsArrayPost from "./AddedPosts/AddedPostsArray";
import AddedPostsArray from "./AddedPosts/AddedPostsArray";
import PostsTitle from "./PostsTitile/PostsTitle";




const Posts:any = (props:any) => {
    console.log(props)



    return (
        <div className={'posts'}>

            {/*posts__title BOTTOM*/}
            <PostsTitle />
            {/*posts__title UP*/}


            <AddPosts addPost = {props.addPost}
                      newPostText = {props.profilePage.newPostText}
                      updatePostText = {props.updatePostText}
            />


            {/*class posts__item*/}
            <AddedPostsArray postsData={props.profilePage.postsData} />
            {/*class posts__item*/}

        </div>
    )

}

export default Posts;