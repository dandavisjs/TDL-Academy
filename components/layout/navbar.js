
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/" passHref>
                <a>
                    <Image src="/images/logo.png" alt="" width={109} height={40} />
                </a>
            </Link>
            <ul>
                <Link href="/" passHref={true}>
                    <li className="pointer"><a><i className="bi bi-file-text"></i>CDL Тесты</a></li>
                </Link>
                <Link href="https://www.truckdriver.help" passHref={true}>
                    <li className="pointer"><a><i className="bi bi-search"></i>Найти Работу</a></li>
                </Link>
            </ul>
        </nav >
    )
}
