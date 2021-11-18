import React,{FC, PropsWithChildren} from "react";
import AllMessages__item from "./AllMessages__item";
import {IState, ObjectsMessageData} from "../../../Redux/state";




const Dialog__messages:FC<IState> = (props) => {
    console.log(props.messagesData)
    // РАЗОБРАЛСЯ!!!!!!!!!!!!!!!!!!!
    let messagesComponent:React.ReactNode = props.messagesData!.map((elem:ObjectsMessageData) => {
        return <AllMessages__item text={elem.message}/>;
    })

    return (
        <div className={'allMessages'}>
            <div className={'allMessages__title'}>
                MESSAGES
            </div>
            {/*class = allMessages__item  BOTTOM*/}
            {messagesComponent}
            {/*class = allMessages__item  UP */}

        </div>
    )
}

export default Dialog__messages