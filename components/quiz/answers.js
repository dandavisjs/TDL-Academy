import { useContext } from 'react'
import styles from './answers.module.css'
import QuizContext from '../../store/quiz-context'

const Answers = ({ questions, handleCheck, handleSelect }) => {
    const quizCtx = useContext(QuizContext)
    const { selected, translate, index } = quizCtx
    const abc = ["A", "B", "C", "D"]

    return (
        <div className="answers">
            {questions[index].answers.map((answer, i) => {


                return (
                    <div style={{ display: "flex", gap: 15, backgroundColor: selected ? handleSelect(i + 1) === "red" ? "#AA4747" : handleSelect(i + 1) === "grey" ? "#F7F7FC" : "#498E3B" : null }} key={i} onClick={() => !selected && handleCheck(i + 1)} className={`${selected && handleSelect(i + 1)}`}>

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

export default Answers;