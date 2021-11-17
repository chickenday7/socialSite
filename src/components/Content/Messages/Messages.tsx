import React,{FC, PropsWithChildren} from "react";
import Users from "./Users/Users";
import Dialog__messages from "./DIalog__messages/Dialog__messages";
import {typeObjectsMessagesData} from "../../../index";

type Props = {
    dataMessages:Array<typeObjectsMessagesData>
}

const Messages:FC<Props> = (props) => {
    console.log(props.dataMessages)
    return(
        <div className={'dialogs'}>
            <div className={'dialogs__users'}>
                <Users />
            </div>
            <div className={'dialogs__messages'}>
                <Dialog__messages dataMessages={props.dataMessages} />
            </div>
        </div>
    )
};

export default Messages;