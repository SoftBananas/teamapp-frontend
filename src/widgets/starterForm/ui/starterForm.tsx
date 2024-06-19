import { FC } from 'react'
import { FormHeader } from "../../../shared/ui/formHeader";
import { Input } from "../../../shared/ui/input";
import { Logos } from "../../../shared/ui/logos";
import { Button } from "../../../shared/ui/button";

import './starterForm.scss'




interface StarterForm {
    readonly headerText: string
    readonly className?: string

    readonly amount: number
    readonly logo1: string
    readonly logo2?: string
    readonly logo3?: string
    readonly logo4?: string

}

export const StarterForm: FC<StarterForm> = (props) => {
    let {
        headerText,
        className,
        amount,
        logo1,
        logo2,
        logo3,
        logo4
    } = props;
    let a;
    let b;
    let c;

    function headerTextDependence() {
        let inputs = []
        if (headerText === 'Регистрация') {
            inputs.push(
                <>
                    <Input inputHeader='Электронная почта' placeholder='Введите вашу почту' className='formInput' />
                    <Input inputHeader='Пароль' placeholder='Введите надёжный пароль' className='formInput' />
                    <Input inputHeader='Повторите пароль' placeholder='Повторите надёжный пароль' className='formInput' />
                </>
            )
            a = 'Зарегистрироваться'
            b = 'Уже зарегистрированы?'
            c = ' Войти'
            return inputs

        } else if (headerText === 'Авторизация') {
            inputs.push(
                <>  
                    <Input inputHeader='Электронная почта' placeholder='Введите вашу почту' className='formInput' />
                    <Input inputHeader='Пароль' placeholder='Введите пароль' className='formInput' />      
                </>
            )
            return inputs
            a = 'Войти'
            b = 'Еще не зарегистрирован?'
            c = ' Зарегистрироваться'
        } else {
            throw new Error('Невалидное название заголовка формы (Регистрация/Авторизация)')
        }
    }

    return (
        <form className={className}>
            <FormHeader children={headerText} className="header" />
            {headerTextDependence()}
            <Button children="Отправить" className='formButton' />
            <p id="first">{a} с помощью</p>
            <Logos amount={amount} logo1={logo1} logo2={logo2} logo3={logo3} logo4={logo4} className='logos' />
            <p id="second">{b}<strong>{c}</strong></p>
        </form>
    )
}
