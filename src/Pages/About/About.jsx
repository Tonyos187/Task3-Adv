import React from 'react'
import Hero2 from '../../components/Hero2/Hero2'
import MissionsAndVisions from '../../components/MissionsAndVisions/MissionsAndVisions'
import Testimonials from '../../components/Testimonials/Testimonials'
import BenefitsCard from '../../components/BenefitsCard/BenefitsCard'
import HistorySection from '../../components/HistorySection/HistorySection'

const About = () => {
    const AwardsCards = [
        [
            { img: "/assets/icons/Awards/Vector.svg", title: "Outstanding Early Childhood Education Awar", text: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment." },
            { img: "/assets/icons/Awards/Union.svg", title: "Innovative STEAM Education Award", text: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners." },
            { img: "/assets/icons/Awards/Vector 449 (Stroke).svg", title: "Environmental Stewardship Award", text: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students." }
        ],
    ];

    const historyArray = [
        { date: "2023", title: "Resilience and Future Horizons", text: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow." },
        { date: "2023", title: "Resilience and Future Horizons", text: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow." },
        { date: "2023", title: "Resilience and Future Horizons", text: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow." },
        { date: "2023", title: "Resilience and Future Horizons", text: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow." },
    ]

    return (
        <>
            <Hero2
                btnText={"Overview"}
                title={"Welcome to Little Learners Academy"}
                text={"A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."}
            />
            <MissionsAndVisions />
            <Testimonials
                btntext="Our Achievements"
                title="Our Awards and Recognitions"
                text="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
                array={AwardsCards}
                CardComponent={BenefitsCard}
                type="Awards"
            />
            <HistorySection array={historyArray} />
        </>
    )
}

export default About