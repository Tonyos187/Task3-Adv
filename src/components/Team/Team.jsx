import styles from './Team.module.css'
import Title from '../Title/Title'
import TeamCard from '../TeamCard/TeamCard'

const Team = ({ array }) => {

    return (
        <section className={styles.team}>
            <Title
                btntext="Our Teachers With Experties"
                title="Our Team Members"
                text="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
            />
            <div className={styles.cardContainer}>
                {array.map((value, index) => {
                    return <TeamCard
                        key={index}
                        name={value.name}
                        qualification={value.qual}
                        text={value.text}
                        img={value.img}
                    />
                })
                }
            </div>
        </section>
    )
}

export default Team