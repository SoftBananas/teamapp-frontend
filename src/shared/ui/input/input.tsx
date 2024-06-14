import { FC } from 'react'
import './input.scss'

interface Input {
    /** Input inner text. */
    readonly children: string
    /** Additional styles. */
    readonly className?: string
}

export const Input: FC<Input> = (props) =>{
    const {
        children,
        className, //?
    } = props;
    return (
        <input
            type='input'
            className={`${className}`}
            placeholder={`${children}`}>
        </input>
    )
}