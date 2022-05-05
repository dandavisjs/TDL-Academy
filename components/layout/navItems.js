import { useContext } from 'react'
import Link from 'next/link'
import NavContext from '../../store/nav-context'

export default function NavItems() {
    const navCtx = useContext(NavContext)
    const { mobile, setMobile } = navCtx

    return (
        <>
            <li>
                <Link href={{ pathname: `/course/dispatch/0` }}>
                    <a onClick={setMobile} style={{ cursor: 'pointer' }}>
                        <i className="bi bi-play"></i>Видео Курсы
                    </a>
                </Link>
            </li>
            <li className="pointer">
                <Link href="/quiz" passHref={true}>
                    <a onClick={setMobile}><i className="bi bi-file-text"></i>CDL Тесты</a>
                </Link>
            </li>
            <li className="pointer">
                <Link href="https://www.truckdriver.help" passHref={true}>
                    <a><i className="bi bi-search"></i>Работа</a>
                </Link>
            </li>
            <li>
                <Link href="https://www.truckdriver.help/resources" passHref={true}>
                    <a style={{ cursor: 'pointer' }}>
                        <i className="bi bi-info-lg"></i>Ресурсы
                    </a>
                </Link>
            </li>
        </>

    )
}
