import React from "react";


const AddPosts: any = (props: any) => {
    let textAreaPost: any = React.createRef();

    let onPostChange: any = () => {
        let text: any = textAreaPost.current.value
        props.postChange(text)

    }

    let onAddPost: any = () => {
        if (props.newPostText.trim() === '' || props.newPostText.trim() === ' ') {
            alert('Пустое сообщение')
        } else {
            props.addPost()
        }

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
                <div onClick={onAddPost} className={'button'}>
                    <div className={'button__text'}>Send</div>
                </div>
            </div>


        </div>
    )
};

export default AddPosts;