import './bgWelcomePage.scss'

import SVG1 from '../../assets/images/svgAnimPhase1.svg?react'
import SVG2 from '../../assets/images/svgAnimPhase2.svg?react'
import SVG3 from '../../assets/images/svgAnimPhase3.svg?react'
import TextBG from '../../assets/images/textBG.svg?react'
import {useEffect, useState} from "react";

export const BgWelcomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {


            const elements = [
                document.getElementById("phase1"),
                document.getElementById("phase2"),
                document.getElementById("phase3")
            ];


            function showNextElement() {
                if (elements[currentIndex]!== null) {
                    elements[currentIndex]!.classList.remove('show');
                    elements[currentIndex]!.style.opacity = '0';
                }

                // Определяем следующий элемент
                const nextIndex = (currentIndex + 1) % elements.length;

                // Показываем следующий элемент
                setCurrentIndex(nextIndex);
                if (elements[nextIndex]) {
                    elements[nextIndex]!.classList.add('show');
                    elements[nextIndex]!.style.opacity = '1';
                }
            }
            if (elements[currentIndex]) {
                elements[currentIndex]!.classList.add('show');
                elements[currentIndex]!.style.opacity = '1';
            }

            // Устанавливаем интервал для переключения элементов
            const interval = setInterval(showNextElement, 2000);

            // Очищаем интервал при размонтировании компонента
            return () => clearInterval(interval);
        },
        [currentIndex]);

    return(
        <div className="background">
            <SVG1 id="phase1" className="svg-element" />
            <SVG2 id="phase2" className="svg-element" />
            <SVG3 id="phase3" className="svg-element" />
            <TextBG className="text-bg"/>
        </div>
    )
}
