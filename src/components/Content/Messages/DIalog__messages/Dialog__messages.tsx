import React,{FC, PropsWithChildren} from "react";
import AllMessages__item from "./AllMessages__item";
import {typeObjectsMessagesData} from "../../../../index";

type Props = {
    dataMessages:Array<typeObjectsMessagesData>
};


const Dialog__messages:FC<Props> = (props) => {
    // разобраться какие элементы и тип переменной!!!!!!!!!!!!!!!!!!!
    let messagesComponent: any = props.dataMessages.map((elem: any) => {
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