import { useContext, useEffect, useState } from 'react'
import QuizContext from '../../store/quiz-context'
import classes from './advert.module.css'
import Support from '../layout/support'
import { CountdownCircleTimer } from
    'react-countdown-circle-timer'

const Advert = ({ }) => {
    const quizCtx = useContext(QuizContext)
    const { setAdvert, setRunning, disabled, setDisabled } = quizCtx
    useEffect(() => {
        setRunning(false)
        setHide(false)
    }, [])
    const [hide, setHide] = useState(false)
    const closeAd = () => {
        setAdvert(false)
        setRunning(true)
    }


    return (
        <div className={classes.main}>
            <p>Спасибо за проявленный интерес к тестам! <em>Мы хотели бы попросить Вас</em> уделить нам минуту Вашего времени.</p>
            <p>Мы разработали эту платформу тестов с намерением помочь иммигрантам из разных стран. Мы планируем пополнять тесты вопросами, пополнять сайт информацией которая будет полезна в разной стадии логистической карьеры, видео курсы, а также пополнять сайт объявлениями на работу. Мы будем продолжать выпускать все материалы <em>бесплатно для Вас.</em></p>
            <Support />
            {hide ? <button style={{ width: 160 }} type='button' onClick={closeAd}>Продолжить</button> :
                <CountdownCircleTimer
                    isPlaying
                    duration={20}
                    colors={['#3C3C77']}
                    size={45}
                    strokeWidth={6}
                    onComplete={() => setHide(true)}

                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>}
        </div>
    )
}

export default Advert;