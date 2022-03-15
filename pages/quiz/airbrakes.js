import Head from 'next/head'
import Quiz from '../../components/quiz/quiz'
import airbrakes from '../../components/quiz/questions/airbrakes'
import styles from '../index.module.css'

export default function Airbrakes() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Тесты CDL с переводом на русский - academy.truckdriver.help</title>
                <meta name="description" content="Тесты CDL с переводом на русский." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Quiz questions={airbrakes} title={"Air Breaks"} />

        </div>
    )
}
