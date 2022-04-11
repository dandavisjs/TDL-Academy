import Link from "next/link"
import classes from './queue.module.css'

export default function Queue({ data, current }) {
    return (
        <div className={classes.main}>
            {
                data.map((item, i) => {
                    return (
                        <div key={i}>
                            <Link href={`/course/dispatch/${i}`}>
                                <h4 style={parseInt(current) === i ? { color: "#3F3C78", cursor: "pointer" } : { cursor: "pointer" }}>{i + 1}{'. '}{item.snippet.title}</h4>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}