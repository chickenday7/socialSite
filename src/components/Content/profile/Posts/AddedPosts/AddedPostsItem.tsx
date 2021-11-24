import React, {FC, PropsWithChildren} from "react";




const AddedPostsItem:any = (props:any) =>{

    let likeArea:any = React.createRef()

    let onAddLike:any = () => {
    let idMessage = likeArea.current.id;
    props.addLike(idMessage)
    }

    return(
        <div className={'posts__item'}>
            <div className={'patternPosts'}>
                <div className={'patternPosts__photo'}></div>
                <div className={'patternPosts__text'}>{props.news}</div>
                <div ref={likeArea} id={props.id} onClick={onAddLike} className={'patternPosts__like'}>like: {props.like}</div>
            </div>
        </div>
    )
}


export default AddedPostsItem;