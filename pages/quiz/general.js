import Head from 'next/head'
import Quiz from '../../components/quiz/quiz'
import general from '../../components/quiz/questions/general'
import styles from '../index.module.css'

export default function General() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Тесты CDL с переводом на русский - academy.truckdriver.help</title>
                <meta name="description" content="Тесты CDL с переводом на русский." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Quiz questions={general} title={"General Knowledge"} />
        </div>
    )
}
