import React, {ChangeEvent} from "react";

type StatusWithEditModePropsType = {
    onChangeStatus:(e:ChangeEvent<HTMLInputElement>)=>void
    deactivateEditMode:()=>void
    status:string | undefined
    localStatus:string
}
export const StatusWithEditMode = (props:StatusWithEditModePropsType) => {

    return(
        <div>
            <input onChange={props.onChangeStatus} value={props.localStatus} autoFocus={true}
                   onBlur={props.deactivateEditMode} placeholder={props.status ? props.status : 'Write your status'} defaultValue={props.status}/>
        </div>
    )
}