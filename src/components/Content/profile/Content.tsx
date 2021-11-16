import React from "react";
import Posts from "./Posts"
import Profile from "./Profile";

const Content = () => {
    return (
        <div className={'content'}>
            <div className={'content__image'}></div>
            <Profile />
            <Posts />
        </div>
    )
};


export default Content;