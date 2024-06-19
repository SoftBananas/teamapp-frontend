import { FC } from 'react'
import {FormHeader} from "../../../shared/ui/formHeader";
import {Input} from "../../../shared/ui/input";
import {Logos} from "../../../shared/ui/logos";
import {Button} from "../../../shared/ui/button";

import './starterForm.scss'




interface StarterForm {
    readonly headerText: string
    readonly className?: string

    readonly logosAmount: number
    readonly logo1: string
    readonly logo2?: string
    readonly logo3?: string
    readonly logo4?: string

}

export const StarterForm: FC<StarterForm> = (props) => {
    let {
        headerText,
        className,
        logosAmount,
        logo1,
        logo2,
        logo3,
        logo4
    } = props;
    let n = 1

    function headerTextDependence() {
        let inputs = []
        if (headerText === 'Регистрация') {
            inputs.push(
                <div>
                    <Input inputHeader='авт' placeholder='рег' />
                    <Input inputHeader='авт' placeholder='рег' />
                    <Input inputHeader='авт' placeholder='рег' />
                </div>
            )
            return inputs
        } else if (headerText === 'Авторизация') {
            inputs.push(
                <div>
                    <Input inputHeader='авт' placeholder='авт' />
                    <Input inputHeader='авт' placeholder='авт' />
                </div>
            )
            return inputs
        } else {
            throw new Error('Невалидное название заголовка формы (Регистрация/Авторизация)')
        }
    }

    return (
        <div className={className}>
            <FormHeader children = {headerText}/>
            {headerTextDependence()}
            <Button children="Отправить"/>
            <Logos amount={logosAmount} logo1={logo1} logo2={logo2} logo3={logo3}/>
        </div>
    )
}
//input
//formHeader
//logos
//starterForm fix