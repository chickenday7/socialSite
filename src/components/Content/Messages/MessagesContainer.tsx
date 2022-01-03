import React from "react";

import {newMessageAddActionCreator, newMessageTextActionCreator} from "../../Redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {Dispatch} from "redux";
import {StateType} from "../../Redux/redux-store";

class MessagesAPI extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
    }
    render() {
        if(!this.props.isAuth){
            return <Navigate to={'/login/'} />
        }
        return (<Messages {...this.props} />);
    }
}
//__________________________________________________________________________


let authRedirectMessages = withAuthRedirect(MessagesAPI)


//__________________________________________________________________________

let mapStateToProps = (state:StateType) => {
    return {
        messagesPage: state.messagesPage,

    }
}
let mapDispatchToProps = (dispatch:Dispatch) => {
     return {
        addMessage: () => {
            dispatch(newMessageAddActionCreator())
        },
         updateMessageText: (text:string) => { //ss
            dispatch(newMessageTextActionCreator(text))
         }
    }
}


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectMessages)
export default MessagesContainer;