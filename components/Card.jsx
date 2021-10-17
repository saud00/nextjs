import Link from 'next/link'
import style from '../styles/Card.module.css'

function Card({val,key}) {
    return (
        <div className={style.card}>
            <Link href="/article/[id]" as={`/article/${val.id}`} ><a>   
                <h3>{val.title}</h3>
                <p>{val.body}</p>
            </a></Link>
        </div>
    )
}

export default Card
