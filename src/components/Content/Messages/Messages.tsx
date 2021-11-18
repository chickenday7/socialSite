import React,{FC, PropsWithChildren} from "react";
import Users from "./Users/Users";
import Dialog__messages from "./DIalog__messages/Dialog__messages";
import {IState, propsApp} from "../../Redux/state";
import {ObjectsMessageData} from "../../Redux/state";

const Messages:FC<IState> = (props) => {
console.log(props);
    return(
        <div className={'dialogs'}>
            <div className={'dialogs__users'}>
                <Users dialogsData={props.dialogsData} />
            </div>
            <div className={'dialogs__messages'}>
                <Dialog__messages messagesData={props.messagesData} />
            </div>
        </div>
    )
};

export default Messages;