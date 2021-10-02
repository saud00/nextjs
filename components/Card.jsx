import style from '../styles/Card.module.css'

function Card({val}) {
    console.log(val)
    return (
        <div className={style.card}>
            <a>
            <h3>{val.title}</h3>
            <p>{val.body}</p>
            </a>
        </div>
    )
}

export default Card
