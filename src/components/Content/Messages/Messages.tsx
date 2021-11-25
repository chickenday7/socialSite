import React,{FC, PropsWithChildren} from "react";
import Users from "./Users/Users";
import Dialog__messages from "./DIalog__messages/Dialog__messages";


const Messages:any = (props:any) => {
    console.log(props)
    return(
        <div className={'dialogs'}>
            <div className={'dialogs__users'}>
                <Users dialogsData={props.messagesPage.dialogsData} />
            </div>
            <div className={'dialogs__messages'}>
                <Dialog__messages
                    messagesData={props.messagesPage.messagesData}
                    newMessageText = {props.messagesPage.newMessageText}
                    addMessage = {props.addMessage}
                    updateMessageText = {props.updateMessageText}
                />
            </div>
        </div>
    )
};

export default Messages;