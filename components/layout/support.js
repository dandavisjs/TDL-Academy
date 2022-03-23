import Subscribe from '../subscribe/subscribe'
import Link from 'next/link'

const Support = ({ }) => {

    return (
        < >
            <p>Наш проект находится на ранних стадиях разработки. Для того чтобы мы могли продолжить работу, нам нужна <em>Ваша поддержка!</em></p>
            <p>Поддержать наш проект вы можете тремя простыми способами:</p>
            <ol>
                <li>Расскажите об этом сайте тем кому он мог бы быть интересен.</li>
                <li>Подпишитесь на наш новый <i style={{ color: '#26A5E4' }} className="bi bi-telegram"> </i><Link href="https://t.me/truckdriverhelp"><a><strong>Телеграм канал</strong></a></Link> где мы размещаем объявления на работу.</li>
                <li>Подпишитесь на рассылку полезного материала, тестов, информации, а также новостей проекта.</li>
            </ol>
            <Subscribe />
        </>
    )
}

export default Support;