import React from "react";
import s from './StatusWithoutEdit.module.scss'

type StatusWithoutEditPropsType = {
    status:string | undefined
    activateEditMode:()=>void
}
export const StatusWithoutEdit = (props:StatusWithoutEditPropsType) => {
  return(
      <div className={s.wrapperStatus} >
          <span className={s.title}>Status:</span>
          {props.status
              ? <span className={s.statusText}  onClick={props.activateEditMode}>{props.status}</span>
              : <span className={s.statusText} onClick={props.activateEditMode} style={{color: "gray"}} >{'write your status here'}</span>
          }
      </div>
  )
}