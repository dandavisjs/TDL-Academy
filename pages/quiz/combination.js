import Head from 'next/head'
import Quiz from '../../components/quiz/quiz'
import combination from '../../components/quiz/questions/combination'
import styles from '../index.module.css'

export default function Combination() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Combination - CDL Тесты с переводом на русский</title>
                <meta name="description" content="Тесты CDL с переводом на русский." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Quiz questions={combination} title={"Combination"} />

        </div>
    )
}
