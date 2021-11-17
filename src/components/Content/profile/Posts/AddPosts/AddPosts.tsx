import React from "react";


const AddPosts = () => {
    return (
        <div className={'addPosts'}>
            <div className={'addPosts__input'}>
                <textarea placeholder={"Tell me your news..."}></textarea>
            </div>
            <div className={'addPosts__button'}>
                <div className={'button'}>
                    <div className={'button__text'}>Send</div>
                </div>
            </div>
        </div>
    )
};

export default AddPosts;