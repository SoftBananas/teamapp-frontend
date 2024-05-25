import './welcomePage.scss'
import {BgWelcomePage} from "../../../shared/ui/bgForWelcomePage";
import {Button} from "../../../shared/ui/button";

export const WelcomePage = () => {

    return (
        <>
            <BgWelcomePage/>
            <div className="welcomePage">
                <div className="welcomeBanner">
                    <h1>TEAMAPP</h1>
                    <div className="welcomeBanner-text">
                        <p>Найди свою <span>первую IT-команду</span> для стартапа, фриланса и всевозможных других проектов.</p>
                        <p>Давай посмотрим, как это работает?</p>
                    </div>
                    <Button children={'Приступить к работе'} className='pointer'/>
                </div>
            </div>

        </>


    )
}

