import Slider from '../Slider/Slider'
import Title from '../Title/Title'
import Styles from './Testimonials.module.css'



const Testimonials = ({btntext, title, text, array, CardComponent, type}) => {
    return (
        <section className={Styles.testimonialsSection}>
            <Title btntext={btntext} title={title} text={text} />
            <Slider array={array} CardComponent={CardComponent} type={type} />
        </section>
    )
}

export default Testimonials