
import Link from 'next/link'


export default function NavItems() {

    return (
        <>
            <Link href="/" passHref={true}>
                <li className="pointer"><a><i className="bi bi-file-text"></i>CDL Тесты</a></li>
            </Link>
            <Link href="https://www.truckdriver.help" passHref={true}>
                <li className="pointer"><a><i className="bi bi-search"></i>Найти Работу</a></li>
            </Link>
        </>

    )
}
