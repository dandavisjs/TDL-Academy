import { useEffect, useState, useContext } from 'react'
import QuizContext from '../../store/quiz-context'

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const quizCtx = useContext(QuizContext)
    const { running } = quizCtx

    useEffect(() => {
        let interval;
        console.log(running);
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1000);
            }, 1000);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running])

    return (
        <div className="numbers">
            {`Время: `}
            <strong>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
            </strong>
        </div>
    )
}

export default Stopwatch;