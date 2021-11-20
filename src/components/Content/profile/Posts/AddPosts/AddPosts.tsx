import React from "react";








const AddPosts:any = (props:any) => {

    console.log(props)
    let textAreaPost:any = React.createRef();

    let onPostChange:any = () =>{
        let text:any = textAreaPost.current.value
        props.updatePostText(text)

    }

    let buttonAddPost:any = () => {
        props.addPost();
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