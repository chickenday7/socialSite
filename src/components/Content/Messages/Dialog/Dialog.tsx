import React from "react";
import ListMessages from "./ListMessage/ListMessages";
import {MessageType} from "../../../Redux/messagesReducer";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";
import s from "./DialogStyle.module.scss"

interface IDialogProps{
    messageData:MessageType[]
    addMessage:(text:string)=>void
}
const Dialog = (props: IDialogProps) => {

    return (
        <div className={s.wrapperDialog}>
            <h3 className={s.title}>MESSAGES</h3>
            <ListMessages messageData={props.messageData}/>
            <AddMessageForm />

        </div>
    )
}

export default Dialog