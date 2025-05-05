import LikeBtn from "../LikeBtn/LikeBtn"
import Styles from "./Hero2.module.css"
import Hero2Shape from "../Hero2Shape/Hero2Shape"
import HeroShapePattern from "../HeroShapePattern/HeroShapePattern"
const Hero2 = ({ btnText, title, text }) => {
    const shapeArray = [4, 3, 2, 1]
    return (
        <section className={Styles.hero}>

            <div className={Styles.leftHeroDiv}>
                <LikeBtn text={btnText} />
                <h2 className={Styles.heroTitle}>{title}</h2>
            </div>
            <p className={Styles.rightHerotext}>{text}</p>

            <HeroShapePattern classname="heroShapes"  shapeArray = {shapeArray} />

        </section>
    )
}

export default Hero2