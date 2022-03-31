
import { useContext } from 'react'
import QuizContext from '../../../store/quiz-context'
import Top from '../../../components/quiz/top'
import combination from '../../../components/quiz/questions/combination'

export default function Combination() {
    const quizCtx = useContext(QuizContext)
    const {
        translate,
        selected,
        wrong } = quizCtx
    return (
        <div className="quiz-main">
            <Top />
            <div className="container">
                {wrong.length !== 0 ?
                    <>
                        <h2>Неверные Ответы</h2>
                        <p>Просмотрите вопросы на которые вы ответили неверно:</p>
                        {wrong.map((n, i) => {
                            return (
                                <div className="questions" key={i}>
                                    <div >
                                        <h4>{translate ? combination.quiz[n].question.rus : combination.quiz[n].question.eng}</h4>
                                    </div>
                                    <div className="answers">
                                        {combination.quiz[n].answers.map((answer, i) => {
                                            return (
                                                <div key={i} onClick={() => !selected && handleCheck(i + 1)} style={combination.quiz[n].answer === ++i ? { backgroundColor: "#498E3B", color: 'white' } : null} className="noselect">
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
