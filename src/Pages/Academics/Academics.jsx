import React from 'react';
import Hero2 from '../../components/Hero2/Hero2';
import Benefits from '../../components/Benefits/Benefits';
import Features from "../../components/Features/Features";
import Gallery from "../../components/Gallery/Gallery";
import GalleryItem from '../../components/GalleryItem/GalleryItem';

const Academics = () => {

    const specialFeatures = [
        { img: "/assets/icons/SpecialFeatures/Subtract.svg", title: "Thematic Learning", text: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant." },
        { img: "/assets/icons/SpecialFeatures/Union.svg", title: "STEAM Education", text: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills." },
        { img: "/assets/icons/SpecialFeatures/Subtract (1).svg", title: "Language Immersion", text: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness." },
        { img: "/assets/icons/SpecialFeatures/Union (1).svg", title: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms." },
        { img: "/assets/icons/SpecialFeatures/Union (2).svg", title: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment." },
        { img: "/assets/icons/SpecialFeatures/Star 5 (Stroke).svg", title: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking." },
    ];

    const featuresArray = [
        { img: "/assets/imgs/Features/1.png", title: "Language Arts", text: "Reading, writing, storytelling, and communication skills." },
        { img: "/assets/imgs/Features/2.png", title: "Mathematics", text: "Number sense, basic operations, problem-solving, and logic." },
        { img: "/assets/imgs/Features/3.png", title: "Science", text: "Exploring the natural world through hands-on experiments and investigations." },
        { img: "/assets/imgs/Features/4.png", title: "Social Studies", text: "Cultivating an understanding of diverse cultures and communities." },
        { img: "/assets/imgs/Features/5.png", title: "Arts and Crafts", text: "Encouraging creativity through various art forms and crafts." },
        { img: "/assets/imgs/Features/6.png", title: "Physical Education", text: "Promoting physical fitness, coordination, and teamwork." }
    ];

    const galleryArray = [
        [
            [
                { img: "/assets/imgs/Gallery/1.webp" },
                { img: "/assets/imgs/Gallery/2.webp" },
                { img: "/assets/imgs/Gallery/3.webp" },
                { img: "/assets/imgs/Gallery/4.webp" }
            ],

        ],
        [
            [
                { img: "/assets/imgs/Gallery/21.webp" },
                { img: "/assets/imgs/Gallery/22.webp" },
                { img: "/assets/imgs/Gallery/23.webp" },
                { img: "/assets/imgs/Gallery/24.webp" }
            ],
        ],
        [
            [
                { img: "/assets/imgs/Gallery/31.webp" },
                { img: "/assets/imgs/Gallery/32.webp" },
                { img: "/assets/imgs/Gallery/33.webp" },
                { img: "/assets/imgs/Gallery/34.webp" }
            ],
        ],
        [
            [
                { img: "/assets/imgs/Gallery/41.webp" },
                { img: "/assets/imgs/Gallery/42.webp" },
                { img: "/assets/imgs/Gallery/43.webp" },
                { img: "/assets/imgs/Gallery/44.webp" }
            ],
        ],
        [
            [
                { img: "/assets/imgs/Gallery/51.webp" },
                { img: "/assets/imgs/Gallery/52.webp" },
                { img: "/assets/imgs/Gallery/53.webp" },
                { img: "/assets/imgs/Gallery/54.webp" }
            ],
        ],
    ];

    const itemTitles = [
        "Classrooms",
        "Library",
        "Science Lab",
        "Computer Lab",
        "Garden and Nature Area"
    ];

    const itemTexts = ["Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
        "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
        "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
        "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
        "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment."
    ];

    return (
        <>
            <Hero2
                btnText={"Academics"}
                title={"Nurturing Young Minds for Success"}
                text={"Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."}
            />
            <Benefits
                btntext="Our Features"
                title="Our Special Features"
                text="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
                array={specialFeatures}
            />
            <Features
                btntext="Our Features"
                title="What Students Learn"
                text="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
                array={featuresArray}
            />

            <Gallery
                btnText="Our Gallery"
                title="Our Rooms Gallery"
                text="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
                array={galleryArray}
                itemTitles={itemTitles}
                itemTexts={itemTexts}
            />
        </>
    )
}

export default Academics