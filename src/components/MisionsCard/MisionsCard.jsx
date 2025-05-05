import Styles from "./MisionsCard.module.css";

const MisionsCard = ({ title = "", text = "", img = "" }) => {
    return (
        <div className={Styles.card}>
            <div className={Styles.topDiv}>
                <h3 className={Styles.title}>{title}</h3>
                <img className={Styles.image} src={img} alt="" />
            </div>
            <p className={Styles.text}>{text}</p>
        </div>
    )
}

export default MisionsCard