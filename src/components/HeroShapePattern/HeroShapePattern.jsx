import Hero2Shape from "../Hero2Shape/Hero2Shape";
import Styles from "./HeroShapePattern.module.css";

const HeroShapePattern = ({ shapeArray, size = "", type , classname = "" }) => {
    return (
        <div className={Styles[classname]}>
            {shapeArray.map((num, i) => (
                <div key={i} style={{ display: 'flex' }}>
                    {Array.from({ length: num }).map((_, j) => (
                        <Hero2Shape size={size} type={type} key={j} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default HeroShapePattern