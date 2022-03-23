import { useContext, useEffect, useState } from 'react'
import QuizContext from '../../store/quiz-context'
import Link from 'next/link'
import classes from './advert.module.css'
import Subscribe from '../subscribe/subscribe'
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
            <p>Спасибо за проявлений интерес к тестам! <em>Мы хотели бы попросить Вас</em> уделить нам минуту вашего времени.</p>
            <p>Мы разработали эту платформу тестов с намерением помочь иммигрантам из разных стран. Мы планируем пополнять тесты вопросами, пополнять сайт информацией которая будет полезна в разной стадии логистической карьеры, видео курсы, а также пополнять сайт объявлениями на работу. Мы будем продолжать выпускать все материалы <em>бесплатно для Вас.</em></p>
            <p>Наш проект находится на ранних стадиях разработки. Для того чтобы мы могли продолжить работу, нам нужна <em>Ваша поддержка!</em></p>
            <p>Поддержать наш проект вы можете тремя простыми способами:</p>
            <ol>
                <li>Расскажите об этом сайте тем кому он могу бы быть интересен.</li>
                <li>Подпишитесь на наш новый <Link href="https://t.me/truckdriverhelp"><a><strong>Телеграм канал</strong></a></Link> где мы размещаем объявления на работу.</li>
                <li>Подпишитесь на рассылку полезного материала, тестов, информации, а также новостей проекта.</li>
            </ol>
            <Subscribe />
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