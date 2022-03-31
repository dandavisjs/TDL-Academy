import { useEffect, useState, useContext } from 'react'
import Answers from './answers'
import styles from './quiz.module.css'
import QuizContext from '../../store/quiz-context'
import Advert from '../../components/quiz/advert'
import Stopwatch from './stopwatch'
import Image from 'next/image'
import Router from 'next/router'
import Top from './top'
const Quiz = ({ questions, title, id, name }) => {
    useEffect(() => {
        setSelected(false)
        setScore(0)
        setWrong([])
        setRunning(true)
        setAdvert(true)
        setTime(0)
        setDisabled(true)
    }, [])

    const index = parseInt(id)
    const quizCtx = useContext(QuizContext)
    const {
        translate,
        selected,
        setSelected,
        setTime,
        setScore,
        wrong,
        setWrong,
        setRunning,
        advert,
        setAdvert,
        score,
        setDisabled } = quizCtx

    const next = () => index + 1 === questions.length ? handleFinish() : nextPage()
    const nextPage = () => {
        setSelected()
        Router.push(`/quiz/${name}/${index + 1}`)
    }
    const handleFinish = () => {
        setRunning(false)
        Router.push(`/quiz/${name}/result`)
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

        <div className="quiz-main">
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <Top count={questions.length} index={index} />

            <div className={styles.questions}>
                {
                    index === 14 && advert ? <Advert />
                        : <>
                            <div className={styles.head}>
                                <h4>{translate ? questions[index].question.rus : questions[index].question.eng}</h4>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>{questions[index].img && <Image src={questions[index].img} height={212} width={222} />}</div>
                            <Answers questions={questions} handleSelect={handleSelect} handleCheck={handleCheck} index={index} />
                            <div className={styles.nav}>
                                <button onClick={next} disabled={!selected}>Дальше</button>
                            </div>
                        </>
                }

            </div>
        </div >
    )
}

export default Quiz;