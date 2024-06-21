import './RegistrationPage.scss'
import SVG21 from './images/starterPageStaticCircle1.svg?react'
import SVG22 from './images/starterPageStaticCircle2.svg?react'
import SVG23 from './images/starterPageStaticCircle3.svg?react'
import TextBG from './images/textBG.svg?react'
import { StarterForm } from "../../../widgets/starterForm"


export const RegistrationPage = () => {
    return (
        <>
            <div id='background'>
                <SVG21 id="Circle1" className="svg-element" />
                <SVG22 id="Circle2" className="svg-element" />
                <SVG23 id="Circle3" className="svg-element" />
                <TextBG id="text-bg"/>
            </div>
            <StarterForm className='regiForm'  headerText='Регистрация' amount={3} logo1='vk' logo2='yandex' logo3='google' />
        </>

    )
}