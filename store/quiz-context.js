import { createContext, useState } from 'react'

const QuizContext = createContext({
    index: null,
    setIndex: function () { },
    selected: null,
    setSelected: function () { },
    score: null,
    setScore: function () { },
    translate: null,
    setTranslate: function () { },
    wrong: null,
    setWrong: function () { },
    finished: null,
    setFinished: function () { },
    running: null,
    setRunning: function () { },
})

export function QuizContextProvider(props) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [activeSelected, setActiveSelected] = useState()
    const [activeScore, setActiveScore] = useState(0)
    const [activeTranslate, setActiveTranslate] = useState(false)
    const [activeWrong, setActiveWrong] = useState([])
    const [activeFinished, setActiveFinished] = useState(false)
    const [activeRunning, setActiveRunning] = useState(true)

    function setIndexHandler(data) {
        setActiveIndex(data)
    }

    function setSelectedHandler(data) {
        setActiveSelected(data)
    }

    function setScoreHandler(data) {
        setActiveScore(data)
    }


    function setTranslateHandler(data) {
        setActiveTranslate(data)
    }

    function setWrongHandler(data) {
        setActiveWrong(data)
    }

    function setFinishedHandler(data) {
        setActiveFinished(data)
    }

    function setRunningHandler(data) {
        setActiveRunning(data)
    }

    const context = {
        index: activeIndex,
        setIndex: setIndexHandler,
        selected: activeSelected,
        setSelected: setSelectedHandler,
        score: activeScore,
        setScore: setScoreHandler,
        translate: activeTranslate,
        setTranslate: setTranslateHandler,
        wrong: activeWrong,
        setWrong: setWrongHandler,
        finished: activeFinished,
        setFinished: setFinishedHandler,
        running: activeRunning,
        setRunning: setRunningHandler,
    };

    return (
        <QuizContext.Provider value={context}>
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizContext