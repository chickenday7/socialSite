import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './SuperInputText.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    position?: string
    necessary?: boolean
}

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange,
        onChangeText,
        onKeyPress,
        onEnter,
        error,
        className,
        spanClassName,
        necessary,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter && e.key === 'Enter' && onEnter()
    }

    const finalSpanClassName = `${spanClassName ? spanClassName : ''} ${s.errorSpan} `
    const finalWrapperClassName = `${className!} ${s.wrapperInput} ${error ? s.errorWrapper : ''} `
    const finalInputClassName = `${error ? s.errorInput : s.input}`
    const finalNecessaryClassName = `${necessary ? s.necessarySpan : ''}`

    return (

        <div className={finalWrapperClassName}>
            <div className={s.settingPosition}>
                <input
                    type={type}
                    onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback}
                    className={finalInputClassName}

                    {...restProps}
                />
                <span className={finalNecessaryClassName}>{necessary ? '*' : ''}</span>
                {error && <span className={finalSpanClassName}>{error}</span>}
            </div>

        </div>
    )
}

export default SuperInputText
