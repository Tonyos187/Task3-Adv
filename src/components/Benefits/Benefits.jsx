import Styles from './Benefits.module.css'
import Title from '../Title/Title'
import BenefitsCard from '../BenefitsCard/BenefitsCard';
const Benefits = ({array, btntext, text, title}) => {



    return (
        <section className={Styles.benefitsSection}>
            <Title btntext={btntext} text={text} title={title} />
            <div className={Styles.benefitsContainer}>
                {array.map((card, index) => (
                    <BenefitsCard
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

export default Benefits