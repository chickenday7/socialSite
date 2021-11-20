import React, {FC, PropsWithChildren} from "react";

type Props = {
    text: string
}


const AddedMessageItem: FC<Props> = (props) => {
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