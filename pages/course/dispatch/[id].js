import { useState } from 'react'
import TestQueue from '../../../data/courses/dispatch/test-queue.json'
import Queue from '../../../components/course/queue'
import Player from '../../../components/course/player'
import Router from 'next/router'
import classes from './id.module.css'
export default function Dispatch(props) {
    const [nav, setNav] = useState(0)

    const { id } = props
    if (!id) {
        return <p>Загружается</p>
    }

    const playNext = () => {
        if (TestQueue.items.length > 0) {
            Router.push(`/course/dispatch/${parseInt(id) + 1}`)
        }
    }
    const selectNav = () => {
        switch (nav) {
            case 0:
                return <Queue data={TestQueue.items} current={id} />
            case 1:
                return <div>About</div>
            case 2:
                return <div>Resource</div>
            default:
                return <Queue data={TestQueue.items} current={id} />
        }
    }
    return (
        <div className={classes.main}>
            <Player videoId={TestQueue.items[id].id.videoId} onEnd={playNext} />
            <div className={classes.nav}>
                <div onClick={() => setNav(0)} className={nav === 0 ? "active-player-nav" : null}>
                    <span>Плейлист</span>
                </div>
                <div onClick={() => setNav(1)} className={nav === 1 ? "active-player-nav" : null}>
                    <span >Подробности</span>
                </div>
                <div onClick={() => setNav(2)} className={nav === 2 ? "active-player-nav" : null}>
                    <span >Ресурсы</span>
                </div>
            </div>
            {selectNav()}
        </div>
    )
}

export async function getStaticProps(context) {
    const { params } = context

    const id = params.id

    return {
        props: {
            id
        }
    }
}

export async function getStaticPaths() {
    const ids = TestQueue.items.map((item, i) => i)
    const pathsWithParams = ids.map((id) => ({ params: { id: String(id) } }))
    return {
        paths: pathsWithParams,
        fallback: false
    }
}