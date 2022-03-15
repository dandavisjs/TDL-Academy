
import styles from './footer.module.css'
import Link from 'next/link'

export default function Home() {
    return (

        <footer className={styles.footer}>
            <span>© {new Date().getFullYear()} TruckDriver.help</span>
            <ul>
                <li>
                    <Link href="https://docs.truckdriver.help" passHref={true}>
                        <a><i className="bi bi-question-circle-fill"></i>Помощь</a>
                    </Link>
                </li>
            </ul>
        </footer>
    )
}
