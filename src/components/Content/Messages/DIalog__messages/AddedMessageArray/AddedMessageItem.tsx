import React, {FC, PropsWithChildren} from "react";




const AddedMessageItem: any = (props:any) => {
    return (
        <div className={'allMessages__item'}>
            <div className={'blockMessage'}>
                <div className={'blockMessage__photo'}>

                </div>
                <div className={'blockMessage__text'}>
                <span>
                {props.text}
                </span>
                </div>

            </div>
        </div>
    )
}
export default AddedMessageItem;