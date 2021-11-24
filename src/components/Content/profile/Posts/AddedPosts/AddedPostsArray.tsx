import React from "react";
import AddedPostsItem from "./AddedPostsItem";




const AddedPostsArray:any = (props:any) => {
    let dialogsComponent:any = props.postsData.map((elem:any) => {
        return  <AddedPostsItem news = {elem.news}
                                like = {elem.likeCount}
                                id={elem.id}
                                addLike = {props.addLike}
                                key = {elem.id}

        />
    });

    return(
        <div className={'addedPosts'}>
        {dialogsComponent}
        </div>
    )
}

export default AddedPostsArray
