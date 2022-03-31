
import { useContext } from 'react'
import QuizContext from '../../store/quiz-context'
import Stopwatch from './stopwatch'
const Head = () => {
    const quizCtx = useContext(QuizContext)
    const {
        translate,
        score,
        setTranslate, } = quizCtx
    return (
        <div className="head">
            <div className="language">
                <button onClick={() => setTranslate(!translate)}>Перевод</button>
                <span>Язык: {translate ? 'Русский' : 'Английский'}</span>
            </div>
            <div >
                <span>Верные ответы: <strong>{score}</strong></span>
                <Stopwatch />
            </div>
        </div>
    )
}

export default Head;