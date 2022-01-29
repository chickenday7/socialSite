import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperInputFile.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    textButton?:string
}

export const SuperInputFile: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        textButton, onClick,
        ...restProps
    }
) => {


    const finalClassName = `${className} ${red
        ? restProps.disabled ? s.redDis: s.red
        : restProps.disabled ? s.wrapperButtonDis : s.wrapperButton} `
    const finalButton = `${restProps.disabled ? s.defaultDis : s.default } ${textButton}`


    return (
        <div className={finalClassName} >
            Update photo
            <input type={'file'} className={s.input}
                {...restProps}
            />
        </div>
    )
}


