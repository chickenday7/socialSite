import React from "react";
import Users from "./Users/Users";
import Dialog from "./Dialog/Dialog";
import {MessagesStateType} from "../../Redux/messagesReducer";
import s from "./MessagesStyle.module.scss"

interface IMessagesProps{
    messagesPage: MessagesStateType
    addMessage:(text:string)=>void
}
const Messages = (props:IMessagesProps) => {
    return(
        <div className={s.wrapperMessages}>
                <Users arrayUsers={props.messagesPage.arrayUsers} />
            <div className={s.messages}>
                <Dialog
                    messageData={props.messagesPage.messageData}
                    addMessage = {props.addMessage}

                />
            </div>
        </div>
    )
};

export default Messages;