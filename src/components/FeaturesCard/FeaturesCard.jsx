import styles from './FeaturesCard.module.css'

const FeaturesCard = ({img, title, text}) => {
    return (
        <div className={styles.featuresCard}>
            <div className={styles.midDecoration}></div>
            <div className={styles.imgDiv}>
                <img className={styles.image} src={img} alt={title} />
            </div>
            <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>{title}</h4>
                <p className={styles.cardText}>{text}</p>
            </div>
        </div>
    )
}

export default FeaturesCard