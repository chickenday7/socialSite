import React from "react";
import {addMessageAC, MessagesStateType} from "../../Redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {Dispatch} from "redux";
import {StateType} from "../../Redux/redux-store";


type MessagesAPIType = MapStateToPropsType & MapDispatchToPropsType
class MessagesAPI extends React.Component<MessagesAPIType>{

    render() {
        return (<Messages {...this.props} />);
    }
}
let authRedirectMessages = withAuthRedirect(MessagesAPI)


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


const MessagesContainer = connect<MapStateToPropsType,MapDispatchToPropsType,{},StateType>(mapStateToProps, mapDispatchToProps)(authRedirectMessages)




export default MessagesContainer;