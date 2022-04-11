import Link from 'next/link'

export default function NavItems() {

    return (
        <>
            <li className="pointer">
                <Link href="/" passHref={true}>
                    <a><i className="bi bi-file-text"></i>CDL Тесты</a>
                </Link>
            </li>
            <li className="pointer">
                <Link href="https://www.truckdriver.help" passHref={true}>
                    <a><i className="bi bi-search"></i>Работа</a>
                </Link>
            </li>
        </>

    )
}
