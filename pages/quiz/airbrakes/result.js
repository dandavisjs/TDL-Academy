
import { useContext } from 'react'
import QuizContext from '../../../store/quiz-context'
import Head from '../../../components/quiz/head'
import airbrakes from '../../../components/quiz/questions/airbrakes'

export default function Airbrakes() {
    const quizCtx = useContext(QuizContext)
    const {
        translate,
        selected,
        wrong } = quizCtx
    return (
        <div className="quiz-main">
            <Head />
            <div className="container">
                {wrong.length !== 0 ?
                    <>
                        <h2>Неверные Ответы</h2>
                        <p>Просмотрите вопросы на которые вы ответили неверно:</p>
                        {wrong.map((n, i) => {
                            return (
                                <div className="questions" key={i}>
                                    <div >
                                        <h4>{translate ? airbrakes.quiz[n].question.rus : airbrakes.quiz[n].question.eng}</h4>
                                    </div>
                                    <div className="answers">
                                        {airbrakes.quiz[n].answers.map((answer, i) => {
                                            return (
                                                <div key={i} onClick={() => !selected && handleCheck(i + 1)} style={airbrakes.quiz[n].answer === ++i ? { backgroundColor: "#498E3B", color: 'white' } : null} className="noselect">
                                                    <span >
                                                        {translate ? answer.rus : answer.eng}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </>
                    : <h2>Вы прошли тест без ошибок.</h2>}

            </div>
        </div>
    )
}
