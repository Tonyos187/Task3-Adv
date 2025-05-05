import Styles from "./MissionsAndVisions.module.css";
import Title from "../Title/Title";
import MisionsCard from "../MisionsCard/MisionsCard";

const MissionsAndVisions = () => {
    const data = [
        { title: "Mission", image: "/assets/icons/Misions/Icon (2).svg", text: "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey." },
        { title: "Vision", image: "/assets/icons/Misions/Icon (1).svg", text: "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity." },
    ];

    return (
        <section className={Styles.MissionsAndVisions}>
            <Title btntext="Mission & Visions" title="Our Mission & Visions" text="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth." />
            <div className={Styles.container}>
                {data.map((value, index) => {
                    return <MisionsCard key={index} title={value.title} text={value.text} img={value.image} />;
                })
                }
            </div>
        </section>
    )
}

export default MissionsAndVisions