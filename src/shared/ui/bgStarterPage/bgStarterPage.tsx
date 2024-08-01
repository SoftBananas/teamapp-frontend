import './bgStarterPage.scss'

import Circle1 from '../../assets/images/starterPageCircle1.svg?react';
import Circle2 from '../../assets/images/starterPageCircle2.svg?react';
import Circle3 from '../../assets/images/starterPageCircle3.svg?react';
import LeftTxt from '../../assets/images/textBGLeft.svg?react';
import RightTxt from '../../assets/images/textBGRight.svg?react';

export const BgStarterPage = () => {

    return (
        <div className="backgroundStarter">
            <div>
                <Circle1 id="crcl1" className="crcl" />
                <Circle2 id="crcl2" className="crcl" />
                <Circle3 id="crcl3" className="crcl" />
            </div>
            <LeftTxt id='txtLeft' className="txtBg" />
            <RightTxt id='txtRight' className="txtBg" />
        </div>
    )
}

