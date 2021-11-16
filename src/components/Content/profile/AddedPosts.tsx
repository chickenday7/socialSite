import React, {FC, PropsWithChildren} from "react";

type Props = {
    news:string,
    like:string
}

const addedPosts:FC<Props> = (props:PropsWithChildren<Props>) =>{
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


export default addedPosts;