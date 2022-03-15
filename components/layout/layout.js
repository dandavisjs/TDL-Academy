
import styles from './layout.module.css'
import Navbar from './navbar'
import Footer from './footer'

export default function Home(props) {
    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.main}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}
