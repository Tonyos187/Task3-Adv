import Styles from "./Hero2Shape.module.css"

const Hero2Shape = ({ type }) => {
    return (
        <div className={`${Styles.container} ${type === "history" ? Styles.size2 : ""}`}>
            <div className={`${Styles.shape} ${type === "history" ? Styles.shapeColor2 : ""}`}></div>
            <div className={`${Styles.cornerBox} ${type === "history" ? Styles.squareColor2 : ""}`}></div>
        </div>
    )
}



export default Hero2Shape