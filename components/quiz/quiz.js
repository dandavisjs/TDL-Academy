import { useEffect, useState, useContext } from 'react'
import general from './questions/general'
import Questions from './questions'
import styles from './quiz.module.css'
import QuizContext from '../../store/quiz-context'
import Stopwatch from './stopwatch'
const Quiz = ({ questions, title }) => {

    useEffect(() => {
        setIndex(0)
        setSelected(false)
        setScore(0)
        setWrong([])
        setFinished(false)
        setRunning(true)
    }, [])

    const quizCtx = useContext(QuizContext)
    const { index,
        setIndex,
        translate,
        setTranslate,
        selected,
        setSelected,
        score,
        setScore,
        wrong,
        setWrong,
        finished,
        setFinished,
        setRunning } = quizCtx

    const next = () => index + 1 === general.length ? handleFinish() : nextPage()
    const nextPage = () => {
        setSelected()
        setIndex(index + 1)
    }

    const handleFinish = () => {
        setRunning(false)
        setFinished(!finished)
    }

    const correct = general[index].answer

    const handleSelect = (i) => {
        if (selected === i && selected === correct) return false;
        else if (selected === i && selected !== correct) return 'red';
        else if (selected !== i && i !== correct) return 'grey';
        else if (i === correct) return false;
    }

    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) {
            setScore(score + 1)
        } else {
            setWrong([...wrong, index])
        }
    }

    return (
        <div className={styles.main}>
            <h3 style={{ textAlign: 'center' }}>{title}</h3>
            <div className={styles.head}>
                <div className={styles.lang}>
                    <button onClick={() => setTranslate(!translate)}>Перевод</button>
                    <span>Язык: {translate ? 'Русский' : 'Английский'}</span>
                </div>
                <div >
                    <span>Вопрос {index + 1} из {general.length}</span>
                    <span>Верные ответы: {score}</span>
                    <Stopwatch />
                </div>
            </div>
            {finished ?
                <>
                    <h3>Неверные Ответы</h3>
                    {wrong.map((n, i) => {
                        return (
                            <div className={styles.questions} key={i}>
                                <div >
                                    <h4>{translate ? general[n].question.rus : general[n].question.eng}</h4>
                                </div>
                                <div className="questions ">
                                    {questions[n].answers.map((answer, i) => {
                                        return (
                                            <div key={i} onClick={() => !selected && handleCheck(i + 1)} style={questions[n].answer === ++i ? { backgroundColor: 'green', color: 'white' } : null} className="noselect">
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

                :
                <div className={styles.questions}>

                    <div className={styles.head}>
                        <h4>{translate ? questions[index].question.rus : questions[index].question.eng}</h4>
                    </div>

                    <Questions questions={questions} handleSelect={handleSelect} handleCheck={handleCheck} />
                    <div className={styles.nav}>
                        <button onClick={next} disabled={!selected}>Дальше</button>
                    </div>
                </div>}
        </div >
    )
}

export default Quiz;