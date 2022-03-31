import Head from 'next/head'
import Quiz from '../../../components/quiz/quiz'
import general from '../../../components/quiz/questions/general'

export default function General(props) {
    const { id } = props
    if (!id) {
        return <p>Загружается!</p>
    }
    return (
        <div >
            <Head>
                <title>General Knowledge - CDL Тесты с переводом на русский</title>
                <meta name="description" content="Тесты CDL с переводом на русский." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Quiz questions={general.quiz} name={general.name} id={id} title={"General Knowledge"} />

        </div>
    )
}

export async function getStaticProps(context) {
    const { params } = context

    const id = params.id

    return {
        props: {
            id
        }
    }
}

export async function getStaticPaths() {
    const ids = general.quiz.map((question, i) => i)
    const pathsWithParams = ids.map((id) => ({ params: { id: String(id) } }))
    return {
        paths: pathsWithParams,
        fallback: false
    }
}