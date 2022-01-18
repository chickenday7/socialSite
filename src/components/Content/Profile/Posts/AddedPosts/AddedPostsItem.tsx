import React from "react";
import user from './../../../../../img/user/user.png'

const AddedPostsItem:any = (props:any) =>{

    let likeArea:any = React.createRef()

    let onAddLike:any = () => {
    let idMessage = Number(likeArea.currentTarget.id);
    props.addLike(idMessage)
    }

    return(
        <div className={'posts__item'}>
            <div className={'patternPosts'}>
                <img className={'patternPosts__photo'} src={user}/>
                <div className={'patternPosts__text'}>{props.news}</div>
                <div ref={likeArea} id={props.id} onClick={onAddLike} className={'patternPosts__like'}>like: {props.like}</div>
            </div>
        </div>
    )
}


export default AddedPostsItem;