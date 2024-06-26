import { FC } from 'react'
import './logos.scss'

interface Logos {
    /** Amount of logos in layout - 4 logos max (can be easily made for bigger amount) */
    readonly amount: number
    /** Names of the companies which logos is needed*/
    /** Rn available: google, vk, yandex*/
    readonly logo1: string
    readonly logo2?: string
    readonly logo3?: string
    readonly logo4?: string

    /** Additional styles if needed */
    readonly className?: string
    /** The function is executed when the logo is pressed */
    readonly onClick?: () => void

}

export const Logos: FC<Logos> = (props) => {
    let {
        amount,
        logo1,
        logo2,
        logo3,
        logo4,
        className,
    } = props;
    let n = 1
    let logo: any

    function amountDependence() {
        if (amount > 0) {
            let logos = []
            
            while (n <= amount) {
                switch(n){
                    case 1:
                        logo = logo1
                        break
                    case 2:
                        logo = logo2
                        break
                    case 3:
                        logo = logo3
                        break
                    case 4:
                        logo = logo4
                        break
                }
                logos.push(
                    <a key={n}>
                        <img src={`/${logo}Logo.svg`} alt={`${logo} logo`} className={`${className} shadow logosSVG`}></img>
                    </a>
                )
                n ++
            }
            return logos
        } else {
            throw new Error('Невалидное первое значение - amount')
        }
    }
    return (
        <div id="forLogos">
            {amountDependence()}
        </div>
    )
}
