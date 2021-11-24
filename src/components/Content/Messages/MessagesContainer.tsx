import React,{FC, PropsWithChildren} from "react";

import {newMessageAddActionCreator, newMessageTextActionCreator} from "../../Redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";



let mapStateToProps = (state:any) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch:any) => {
     return {
        addMessage: () => {
            dispatch(newMessageAddActionCreator())
        },
         updateMessageText: (text:any) => {
            dispatch(newMessageTextActionCreator(text))
         }
    }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
export default MessagesContainer;