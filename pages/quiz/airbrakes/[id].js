import Head from 'next/head'
import Quiz from '../../../components/quiz/quiz'
import airbrakes from '../../../components/quiz/questions/airbrakes'

export default function Airbrakes(props) {
    const { id } = props
    if (!id) {
        return <p>Загружается</p>
    }
    return (
        <div >
            <Head>
                <title>Air Brake - CDL Тесты с переводом на русский</title>
                <meta name="description" content="Тесты CDL с переводом на русский." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Quiz questions={airbrakes.quiz} name={airbrakes.name} id={id} title={"Air Brakes"} />
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
    const ids = airbrakes.quiz.map((question, i) => i)
    const pathsWithParams = ids.map((id) => ({ params: { id: String(id) } }))
    console.log(ids.length);
    console.log(airbrakes.quiz.length);
    return {
        paths: pathsWithParams,
        fallback: false
    }
}