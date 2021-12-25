import React from "react";
import {addLikeActionCreator, newPostAddActionCreator, newPostTextActionCreator} from "../../../Redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";


let mapStateToProps = (state:any) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        addLike: (idMessage:any) => {
            dispatch(addLikeActionCreator(idMessage))
        },
        addPost: () => {
            dispatch(newPostAddActionCreator())
        },
        postChange: (text:any) => {
            dispatch(newPostTextActionCreator(text))
        }
    }
}


const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)



export default PostsContainer;