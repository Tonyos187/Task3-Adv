import styles from './Border.module.css'

const Border = ({type}) => {
    return (
        <div className={`${styles.border} ${type === "history1" ? styles.historyBorder1 : ""} ${type === "history2" ? styles.historyBorder2 : ""}`}>
            <div className={`${styles.borderLine} ${type === "history2" ? styles.historyBorderLine2 : ""} ${type === "history2" ? styles.historyBorderLine2 : ""}`}></div>
        </div>
    )
}

export default Border