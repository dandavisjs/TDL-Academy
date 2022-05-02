import { useState } from 'react'
import Dispatcher from '../../../data/courses/dispatch/dispatch.json'
import Queue from '../../../components/course/queue'
import Player from '../../../components/course/player'
import Router from 'next/router'
import Link from 'next/link'
import classes from './id.module.css'
export default function Dispatch(props) {
    const [nav, setNav] = useState(0)

    const { id } = props
    if (!id) {
        return <p>Загружается</p>
    }

    const playNext = () => {
        console.log(id);
        console.log(Dispatcher.items.length);
        if (parseInt(id) + 1 < Dispatcher.items.length) {
            Router.push(`/course/dispatch/${parseInt(id) + 1}`)
        }
    }

    const selectNav = () => {
        switch (nav) {
            case 0:
                return <Queue data={Dispatcher.items} current={id} />
            case 1:
                return <div><h3>{Dispatcher.items[id].snippet.title}</h3><p>{Dispatcher.items[id].about}</p></div>
            case 2:
                return <div>{Dispatcher.items[id].resources.map((resource, i) => {
                    return (
                        <div key={i}>{i + 1}. <Link href={resource.url}><a>{resource.name}</a></Link></div>
                    )
                })}</div>
            default:
                return <Queue data={Dispatcher.items} current={id} />
        }
    }
    return (
        <div className={classes.main}>
            <div>
                <h2>Бесплатные видео курсы диспетчера в США</h2>
                <p>Вторая половина курса, а также дополнительные ресурсы будут доступны в июне.</p>
            </div>
            <Player videoId={Dispatcher.items[id].id.videoId} onEnd={playNext} />
            <div className={classes.nav}>
                <div onClick={() => setNav(0)} className={nav === 0 ? "active-player-nav" : null}>
                    <span>Плейлист</span>
                </div>
                {Dispatcher.items[id].resources &&
                    <div onClick={() => setNav(2)} className={nav === 2 ? "active-player-nav" : null}>
                        <span >Ресурсы</span>
                    </div>}
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
    const ids = Dispatcher.items.map((item, i) => i)
    const pathsWithParams = ids.map((id) => ({ params: { id: String(id) } }))
    return {
        paths: pathsWithParams,
        fallback: false
    }
}