import { useEffect, useState, useContext } from 'react'
import Questions from './answers'
import styles from './quiz.module.css'
import QuizContext from '../../store/quiz-context'
import Advert from '../../components/quiz/advert'
import Stopwatch from './stopwatch'
const Quiz = ({ questions, title }) => {

    useEffect(() => {
        setIndex(0)
        setSelected(false)
        setScore(0)
        setWrong([])
        setFinished(false)
        setRunning(true)
        setAdvert(true)
        setDisabled(true)
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
        setRunning,
        advert,
        setAdvert,
        setDisabled } = quizCtx

    const next = () => index + 1 === questions.length ? handleFinish() : nextPage()
    const nextPage = () => {
        setSelected()
        setIndex(index + 1)
    }

    const handleFinish = () => {
        setRunning(false)
        setFinished(!finished)
    }

    const correct = questions[index].answer

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
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <div className={styles.head}>
                <div className={styles.lang}>
                    <button onClick={() => setTranslate(!translate)}>Перевод</button>
                    <span>Язык: {translate ? 'Русский' : 'Английский'}</span>
                </div>
                <div >
                    <span>Вопрос <strong>{index + 1} из {questions.length}</strong></span>
                    <span>Верные ответы: <strong>{score}</strong></span>
                    <Stopwatch />
                </div>
            </div>
            {finished ? wrong.length !== 0 ?
                <>
                    <h2>Неверные Ответы</h2>
                    <p>Просмотрите вопросы на которые вы ответили неверно:</p>
                    {wrong.map((n, i) => {
                        return (
                            <div className={styles.questions} key={i}>
                                <div >
                                    <h4>{translate ? questions[n].question.rus : questions[n].question.eng}</h4>
                                </div>
                                <div className="answers">
                                    {questions[n].answers.map((answer, i) => {
                                        return (
                                            <div key={i} onClick={() => !selected && handleCheck(i + 1)} style={questions[n].answer === ++i ? { backgroundColor: "#498E3B", color: 'white' } : null} className="noselect">
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
                : <h2>Вы прошли тест без ошибок.</h2>
                :
                <div className={styles.questions}>
                    {
                        index === 14 && advert ? <Advert />
                            : <>
                                <div className={styles.head}>
                                    <h4>{translate ? questions[index].question.rus : questions[index].question.eng}</h4>
                                </div>

                                <Questions questions={questions} handleSelect={handleSelect} handleCheck={handleCheck} />
                                <div className={styles.nav}>
                                    <button onClick={next} disabled={!selected}>Дальше</button>
                                </div>
                            </>
                    }

                </div>}
        </div >
    )
}

export default Quiz;