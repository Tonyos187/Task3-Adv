import styles from './HistoryCard.module.css'
import Circle from '../Circle/Circle'
import HeroShapePattern from '../HeroShapePattern/HeroShapePattern'
import Border from '../Border/Border'
const HistoryCard = ({ date, title, text }) => {
    const shapeArray = [3, 3, 3]
    return (
        <div className={styles.historyCard}>
            
            <div className={styles.cardHistory}>
                <HeroShapePattern classname="historyShapes" shapeArray={shapeArray} type="history" />
                <span className={styles.date}>{date}</span>
                <Border type="history2"/>
            </div>
            <div className={styles.cardContent}>
                <h5 className={styles.title}>{title}</h5>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}

export default HistoryCard