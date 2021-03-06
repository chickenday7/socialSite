import React from "react";
import {addLikeActionCreator, newPostAddActionCreator, newPostTextActionCreator} from "../../../Redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateType} from "../../../Redux/redux-store";


let mapStateToProps = (state:StateType) => {
    return {
        profilePage: state.profilePage
    }
}


type MapDispatchToPropsType = {
    addLike: (idMessage:number)=> void
    addPost: () => void
    postChange: (text:string) => void
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        addLike: (idMessage) => {
            dispatch(addLikeActionCreator(idMessage))
        },
        addPost: () => {
            dispatch(newPostAddActionCreator())
        },
        postChange: (text) => {
            dispatch(newPostTextActionCreator(text))
        }
    }
}


const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)



export default PostsContainer;