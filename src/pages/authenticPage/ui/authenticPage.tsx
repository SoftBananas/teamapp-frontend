import './authenticPage.scss'
import SVG21 from './images/starterPageStaticCircle1.svg?react'
import SVG22 from './images/starterPageStaticCircle2.svg?react'
import SVG23 from './images/starterPageStaticCircle3.svg?react'
import TextBG from './images/leftTeamapp.svg?react'
import { StarterForm } from "../../../widgets/starterForm"


export const AuthenticPage = () => {
    return (
        <>
            <div id='background'>
                <SVG21 id="Circle21" className="svg-element" />
                <SVG22 id="Circle22" className="svg-element" />
                <SVG23 id="Circle23" className="svg-element" />
                <TextBG id="text-bg" className="svg-element" />
                <div id="mainAuth">
                    <StarterForm headerText='Авторизация' amount={3} logo1='vk' logo2='yandex' logo3='google' />
                </div>
            </div>
        </>
    )
}