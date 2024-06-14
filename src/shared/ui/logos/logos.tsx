import { FC } from 'react'
import './logos.scss'

interface Logos {
    /** Amount of logos in layout - 4 logos max (can be easily made for bigger amount) */
    readonly amount: number
    /** Names of the companies which logos is needed*/
    /** Rn available: google, vk, yandex*/
    readonly logo1: string
    readonly logo2: string
    readonly logo3: string
    readonly logo4?: string
    /** Additional styles if needed */
    readonly castomClassName?: string
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
        castomClassName,
    } = props;
    let n = 1
    let forAlt = logo1

    function amountDependence() {
        if (amount > 0) {
            let logos = []
            while (amount) {
                logos.push(
                    <a key={n}>
                        <img src={`/public/logo${n}.svg`} alt={`${forAlt} logo`} className={`${castomClassName}`}></img>
                    </a>
                )
                n = n + 1
                forAlt = 'logo' + n
                amount --
            }
            return logos
        } else {
            throw new Error('Невалидное первое значение - amount')
        }
    }
    return (
        <div>
            {amountDependence()}
        </div>
    )
}
