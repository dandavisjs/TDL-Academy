import ReactPlayer from 'react-player/youtube'
import styles from './player.module.css'

export default function Player(props) {
    const videoURL = "https://www.youtube.com/watch?v=" + props.videoId
    return (
        <div className={styles.container}>

            <ReactPlayer
                url={videoURL}
                playing={true}
                onEnded={props.onEnd}
                width='100%'
                config={{
                    youtube: {
                        playerVars: {
                            autoplay: 1,
                            controls: 1
                        }
                    }
                }}
            />
        </div>
    )
}