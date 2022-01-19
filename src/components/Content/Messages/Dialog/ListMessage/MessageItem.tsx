import React from "react";
import {MessageType} from "../../../../Redux/messagesReducer";
import s from "./MessageItemStyle.module.scss"


interface IMessageItem extends MessageType{
}
const MessageItem = (props:IMessageItem) => {
    return (
        <div className={s.wrapperMessage} key={props.id}>
            <div className={s.blockMessage}>
                <div className={s.photo}>

                </div>
                <div className={s.text}>
                <span>
                {props.message}
                </span>
                </div>

            </div>
        </div>
    )
}
export default MessageItem;