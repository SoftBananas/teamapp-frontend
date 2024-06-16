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
        <label>
            {inputHeader}
            <input
                type='input'
                className={`${className}`}
                placeholder={`${placeholder}`}>
            </input>
        </label>

    )
}