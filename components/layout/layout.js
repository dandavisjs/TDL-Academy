
import styles from './layout.module.css'
import Navbar from './navbar'
import Footer from './footer'
import ReactPixel from 'react-facebook-pixel';

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
