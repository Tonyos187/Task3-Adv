import styles from './TeamCard.module.css'

const TeamCard = ({ img, name, qualification, text }) => {
    return (
        <div className={styles.card}>
            <div className={styles.headingDiv}>

                <div className={styles.nameDiv}>
                    <div className={styles.imgDiv}>
                        <img className={styles.image} src={img} alt={name} />
                    </div>
                    <h6 className={styles.name}>{name}</h6>
                </div>



                <div className={styles.iconDiv}>
                    <img className={styles.icon} src="/assets/icons/Team/Vector.svg" alt="Envelope" />
                </div>

            </div>

            <div className={styles.textContainer}>
                <h6 className={styles.qual}>{qualification}</h6>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}

export default TeamCard