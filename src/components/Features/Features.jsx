import styles from './Features.module.css'
import Title from '../Title/Title'
import FeaturesCard from '../FeaturesCard/FeaturesCard'

const Features = ({ btntext, title, text, array }) => {
    return (
        <section className={styles.features}>
            <Title btntext={btntext} title={title} text={text} />
            <div className={styles.featuresCardContainer}>
                {array.map((card, index) => (
                    <FeaturesCard
                        key={index}
                        img={card.img}
                        title={card.title}
                        text={card.text}
                    />
                ))}
            </div>
        </section>
    )
}

export default Features