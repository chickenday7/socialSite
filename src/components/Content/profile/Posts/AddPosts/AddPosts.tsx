import React from "react";
import {newPostAddActionCreator, newPostTextActionCreator} from "../../../../Redux/profileReducer";








const AddPosts:any = (props:any) => {
    let textAreaPost:any = React.createRef();

    let onPostChange:any = () =>{
        let text:any = textAreaPost.current.value
        props.dispatch(newPostTextActionCreator(text))

    }

    let buttonAddPost:any = () => {
        props.dispatch(newPostAddActionCreator());
    }



    return (
        <div className={'addPosts'}>


            <div className={'addPosts__input'}>
                <textarea ref={textAreaPost}
                          placeholder={"Tell me your news..."}
                          onChange={onPostChange}
                          value={props.newPostText}
                />
            </div>


            <div className={'addPosts__button'}>
                <div onClick={buttonAddPost} className={'button'}>
                    <div className={'button__text'}>Send</div>
                </div>
            </div>



        </div>
    )
};

export default AddPosts;