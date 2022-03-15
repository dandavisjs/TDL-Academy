import { useContext } from 'react'
import styles from './questions.module.css'
import QuizContext from '../../store/quiz-context'

const Questions = ({ questions, handleCheck, handleSelect }) => {
    const quizCtx = useContext(QuizContext)
    const { selected, translate, index } = quizCtx
    const abc = ["A", "B", "C", "D"]

    return (
        <div className="questions">
            {questions[index].answers.map((answer, i) => {
                return (
                    <div style={{ display: "flex", gap: 15, backgroundColor: selected ? handleSelect(i + 1) === "red" ? "red" : handleSelect(i + 1) === "grey" ? "#F7F7FC" : "green" : null }} key={i} onClick={() => !selected && handleCheck(i + 1)} className={`${selected && handleSelect(i + 1)}`}>

                        <span className="noselect"><strong>{abc[i]}</strong></span>
                        <span className="noselect">
                            {translate ? answer.rus : answer.eng}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Questions;