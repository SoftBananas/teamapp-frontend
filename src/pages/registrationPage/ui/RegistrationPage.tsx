import './RegistrationPage.scss'
import { StarterForm } from "../../../widgets/starterForm";


export const RegistrationPage = () => {
    return (
        <>
        <StarterForm headerText='Регистрация' amount={3} logo1='vk' logo2='yandex' logo3='google'/>
        </>
    )
}