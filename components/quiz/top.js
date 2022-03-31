
import { useContext } from 'react'
import QuizContext from '../../store/quiz-context'
import Stopwatch from './stopwatch'
const Head = ({ count, index }) => {
    const quizCtx = useContext(QuizContext)
    const {
        translate,
        score,
        setTranslate,
        running } = quizCtx
    return (
        <div className="head">
            <div className="language">
                <button onClick={() => setTranslate(!translate)}>Перевод</button>
                <span>Язык: {translate ? 'Русский' : 'Английский'}</span>
            </div>
            <div >
                {running ? <span>Вопрос <strong>{index + 1} из {count}</strong></span> : null}
                <span>Верные ответы: <strong>{score}</strong></span>
                <Stopwatch />
            </div>
        </div>
    )
}

export default Head;