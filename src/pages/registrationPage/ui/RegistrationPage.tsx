import './RegistrationPage.scss'
import { StarterForm } from "../../../widgets/starterForm";


export const RegistrationPage = () => {
    return (
        <>
            <div className='background'>
                <img src="src\shared\assets\images\staticCircle1.svg" />
                <img src="src\shared\assets\images\staticCircle2.svg"/>
                <img src="src\shared\assets\images\staticCircle3.svg"/>
                <img src="src\shared\assets\images\textBG.svg"/>
            </div>
            <StarterForm headerText='Регистрация' amount={3} logo1='vk' logo2='yandex' logo3='google' />
        </>

    )
}