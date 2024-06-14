import { FC } from 'react'
import './logos.scss'

interface Logos {
    /** Button text. */
    readonly amount: number
    readonly logo1: string
    readonly logo2: string
    readonly logo3: string
    readonly logo4?: string
    /** Icon before text. */
    //readonly Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    /** Additional styles. */
    readonly castomClassName?: string
    /** The function is executed when the button is pressed. */
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
            throw new Error('Невалидное первого значения - amount')
        }
    }
    return (
        <div>
            {amountDependence()}
        </div>
    )
}
