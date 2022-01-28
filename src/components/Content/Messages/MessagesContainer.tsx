import React from "react";
import {addMessageAC, MessagesStateType} from "../../Redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose, Dispatch} from "redux";
import {StateType} from "../../Redux/redux-store";


type MessagesAPIType = MapStateToPropsType & MapDispatchToPropsType
class MessagesContainer extends React.Component<MessagesAPIType>{

    render() {
        return (<Messages {...this.props} />);
    }
}


type MapStateToPropsType = {
    messagesPage: MessagesStateType
}
let mapStateToProps = (state:StateType):MapStateToPropsType => {
    return {
        messagesPage: state.messagesPage,
    }
}

type MapDispatchToPropsType = {
    addMessage:(message:string)=>void
}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
     return {
        addMessage: (text) => {
            dispatch(addMessageAC(text))
        }
    }
}



export default compose<React.ComponentType>(
    connect<MapStateToPropsType,MapDispatchToPropsType,{},StateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MessagesContainer)

