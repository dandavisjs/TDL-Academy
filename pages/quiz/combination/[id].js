import Head from 'next/head'
import Quiz from '../../../components/quiz/quiz'
import combination from '../../../data/quiz/combination'

export default function Combination(props) {
    const { id } = props
    if (!id) {
        return <p>Загружается</p>
    }
    return (
        <div >
            <Head>
                <title>Combination - CDL-A Тесты с переводом на русский</title>
                <meta name="description" content="Тесты CDL-A с переводом на русский." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Quiz questions={combination.quiz} name={combination.name} id={id} title={"Combination"} />

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
    const ids = combination.quiz.map((question, i) => i)
    const pathsWithParams = ids.map((id) => ({ params: { id: String(id) } }))
    return {
        paths: pathsWithParams,
        fallback: false
    }
}