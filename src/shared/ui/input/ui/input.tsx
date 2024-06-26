import { FC } from 'react'
import './input.scss'

interface Input {
    /** Input inner text. */
    readonly placeholder: string
    readonly inputHeader: string
    /** Additional styles. */
    readonly className?: string
}

export const Input: FC<Input> = (props) => {
    const {
        placeholder,
        inputHeader,
        className,
    } = props;
    return (
        <label id="labelForInput">
            {inputHeader}
            <input
                type='input'
                className={`${className} inputStyle`}
                placeholder={`${placeholder}`}>
            </input>
        </label>

    )
}