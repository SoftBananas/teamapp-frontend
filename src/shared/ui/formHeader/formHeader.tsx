import { FC } from 'react'
import './formHeader.scss'

interface FormHeader {
    readonly children: string
    readonly className?: string
}

export const FormHeader: FC<FormHeader> = (props) =>{
    const {
        children,
        className,
    } = props;
    return (
        <h4 className={`${className}`}>
            {children}
        </h4>
    )
}