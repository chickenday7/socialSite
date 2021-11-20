import React, {FC, PropsWithChildren} from "react";



const AddedPostsItem:any = (props:any) =>{

    return(
        <div className={'posts__item'}>
            <div className={'patternPosts'}>
                <div className={'patternPosts__photo'}></div>
                <div className={'patternPosts__text'}>{props.news}</div>
                <div className={'patternPosts__like'}>like: {props.like}</div>
            </div>
        </div>
    )
}


export default AddedPostsItem;