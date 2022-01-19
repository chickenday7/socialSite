import React from "react";
import MessageItem from "./MessageItem";
import {MessageType} from "../../../../Redux/messagesReducer";


interface IListMessages {
    messageData: MessageType[]
}
const ListMessages = (props: IListMessages) => {


    return (
        <>
            {props.messageData
                ? props.messageData.map((elem) => {
                return <MessageItem message={elem.message}
                                    id={elem.id}
                />
            })
                : <span>You have no messages</span>
            }
        </>
    )
}

export default ListMessages