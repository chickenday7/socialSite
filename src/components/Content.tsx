import React from "react";

const Content = () => {
    return (
        <div className={'content'}>
            <div className={'content__image'}>image</div>

            <div className={'profile'} >
                <div className={'profile__photo'}></div>
                <div className={'description'}>Description</div>
            </div>
            <div className={'posts'}>
                <div className={'posts__title'}>My posts</div>
                <div className={'addPosts'}>Add post</div>
                <div className={'existingPost'}>post 1</div>
                <div className={'existingPost'}>post 2</div>
            </div>

        </div>
    )
};


export default Content;