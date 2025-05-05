import styles from './HistorySection.module.css'
import Title from '../Title/Title'
import HistoryCard from '../HistoryCard/HistoryCard'
import Border from '../Border/Border'

const HistorySection = ({ array }) => {
    return (
        <section className={styles.history}>
            <Title btntext="Our Progressive Journey" title="Our History" text="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment" />
            <div className={styles.historySection}>
                <div className={styles.historyContainer}>
                    {array.map((card, index) => (
                        <HistoryCard
                            key={index}
                            date={card.date}
                            title={card.title}
                            text={card.text}
                            isLast = {`${index === array.length - 1 ? "yes" : ""}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HistorySection