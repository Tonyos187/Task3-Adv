import styles from './HistoryCard.module.css'
import Circle from '../Circle/Circle'
import HeroShapePattern from '../HeroShapePattern/HeroShapePattern'
import Border from '../Border/Border'
const HistoryCard = ({ date, title, text, isLast }) => {
    const shapeArray = [3, 3, 3]
    return (
        <div className={styles.historyCard}>
            {!isLast && (<div className={styles.border2}></div>)}

            <div className={styles.cardHistory}>
                <HeroShapePattern classname="historyShapes" shapeArray={shapeArray} type="history" />
                <span className={styles.date}>{date}</span>

                <div className={styles.borderDiv}>

                    <div className={styles.circle1}>
                        <Circle />
                    </div>

                    <div className={styles.border}></div>
                    <div className={styles.circle2}>
                        <Circle />
                    </div>
                </div>
            </div>
            <div className={styles.cardContent}>
                <h5 className={styles.title}>{title}</h5>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}

export default HistoryCard