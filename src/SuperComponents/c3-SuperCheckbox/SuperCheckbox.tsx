import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'
import s from './SuperCheckbox.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }
    const finalInputClassName = `${restProps.checked ? s.divCheckboxTrue : s.divCheckboxFalse} ${className ? className : ''}`
    const finalCircClassName = `${restProps.checked ? s.circTrue : s.circFalse} ${className ? className : '' } `


    return (
        <label className={s.label}  >
            <div className={finalInputClassName} >
                <div className={finalCircClassName}/>
            </div>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={s.checkbox}

                {...restProps}
            />
            {children && <span className={s.spanClassName}>{children}</span>}
        </label>
    )
}

export default SuperCheckbox
