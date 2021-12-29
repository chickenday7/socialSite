import React from "react";
import {
    addLikeActionCreator,
    newPostAddActionCreator,
    newPostTextActionCreator,
    ProfileStateType
} from "../../../Redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateType} from "../../../Redux/redux-store";
import {ProfilePropsType} from "../ProfileContainer";


let mapStateToProps = (state:StateType) => {
    return {
        profilePage: state.profilePage
    }
}


type mapDispatchToProps = {
    addLike: (idMessage:number)=> void
    addPost: () => void
    postChange: (text:string) => void
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToProps => {
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