import './RegistrationPage.scss'
import {BgWelcomePage} from "../../../shared/ui/bgForWelcomePage";
import {FormHeader} from "../../../shared/ui/formHeader";
import {Input} from "../../../shared/ui/input";
import {Logos} from "../../../shared/ui/logos";
import {Button} from "../../../shared/ui/button";

export const RegistrationPage = () => {

    return (
        <>
            <BgWelcomePage/>
            <Input inputHeader='Электронная почта' placeholder='Введите вашу почту'/>
        </>


    )
}