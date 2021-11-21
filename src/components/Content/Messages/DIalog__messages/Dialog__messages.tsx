import React, {FC, PropsWithChildren} from "react";
import AddedMessageArray from "./AddedMessageArray/AddedMessageArray";


const Dialog__messages: any = (props: any) => {


    let textAreaMessage: any = React.createRef()

    let addMessage: any = () => {
        props.addMessage()
    }

    let updateMessageText: any = () => {
        let text: any = textAreaMessage.current.value;
        props.updateMessageText(text)
    }





    return (
        <div className={'allMessages'}>
            <div className={'allMessages__title'}>
                MESSAGES
            </div>


            {/*class = allMessages__item  BOTTOM*/}
            <AddedMessageArray messagesData={props.messagesData}/>
            {/*class = allMessages__item  UP */}


            <div className={'allMessages__input'}>
                <textarea
                    ref={textAreaMessage}
                    onChange={updateMessageText}
                    value={props.newMessageText}
                />
            </div>
            <div className={'allMessages__button'}>
                <div onClick={addMessage} className={'button'}>
                    <div className={'button__text'}>Send</div>
                </div>
            </div>
        </div>
    )
}

export default Dialog__messages