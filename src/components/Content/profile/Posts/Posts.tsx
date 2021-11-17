import React from "react";
import AddPosts from "./AddPosts/AddPosts";
import AddedPosts from "./AddedPosts/AddedPosts";



const Posts = () => {
    let dialogsData:any = [
        {id:1, news:"the weather in St. Petersburg is suitable for studying",likeCount: 99},
        {id:2,news:'tear and sword c:', likeCount: 2},
        {id:3,news:'this is my first project on a react!', likeCount: 8},
    ];
    let dialogsComponent:any = dialogsData.map((elem:any) => {
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