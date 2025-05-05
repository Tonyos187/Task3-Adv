import React from "react";
import Hero from "../../components/Hero/Hero";
import Benefits from "../../components/Benefits/Benefits";
import Testimonials from "../../components/Testimonials/Testimonials";
import TestCard from "../../components/TestCard/TestCard";
import FAQ from "../../components/FAQ/FAQ";
import { Navigate } from "react-router-dom";

const Home = () => {
    const benCards = [
        { img: "/assets/icons/Benefits/Union.svg", title: "Holistic Learning Approach", text: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education." },
        { img: "/assets/icons/Benefits/Vector.svg", title: "Experienced Educators", text: "Our passionate and qualified teachers create a supportive and stimulating learning environment." },
        { img: "/assets/icons/Benefits/Vector (1).svg", title: "Nurturing Environment", text: "We prioritize safety and provide a warm and caring atmosphere for every child." },
        { img: "/assets/icons/Benefits/Vector (Stroke).svg", title: "Play-Based Learning", text: "We believe in the power of play to foster creativity, problem-solving skills, and imagination." },
        { img: "/assets/icons/Benefits/Vector (Stroke) (2).svg", title: "Individualized Attention", text: "Our small class sizes enable personalized attention, catering to each child's unique needs." },
        { img: "/assets/icons/Benefits/Union (1).svg", title: "Parent Involvement", text: "We foster a strong parent-school partnership to ensure seamless communication and collaboration." },
    ];

    const testCards = [
        [
            { img: "/assets/imgs/Testimonials/Icon.png", name: "Jennifer B", description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
            { img: "/assets/imgs/Testimonials/Icon (1).png", name: "David K", description: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment." },
            { img: "/assets/imgs/Testimonials/Icon (2).png", name: "Emily L", description: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers." }
        ],
    ];

    return (
        <>
            <Hero />

            <Benefits
                btntext="Children Deserve Bright Future"
                title="Our Benefits"
                text="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
                array={benCards}
            />
            <Testimonials
                btntext="Their Happy Words 🤗"
                title="Our Testimonials"
                text="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
                array={testCards}
                CardComponent={TestCard}
                type="Testimonials"
            />
            <FAQ />
            <Navigate />
        </>
    );
};

export default Home;