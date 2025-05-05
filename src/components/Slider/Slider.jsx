import React, { useEffect, useState } from "react";
import styles from "./Slider.module.css";

const Slider = ({ array = [], CardComponent = null, type = "", galleryTitle = "" }) => { //eslint-disable-line
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [display, setDisplay] = useState(window.innerWidth >= 992);
    const [buttonsDisabled, setButtonsDisabled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setDisplay(window.innerWidth >= 992);
            setCurrentIndex(1);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!isTransitioning) {
            const timeout = setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [isTransitioning]);

    const temporarilyDisableButtons = () => {
        setButtonsDisabled(true);
        setTimeout(() => setButtonsDisabled(false), 400);
    };

    const nextSlide = () => {
        if (buttonsDisabled) return;
        setCurrentIndex((prev) => prev + 1);
        temporarilyDisableButtons();
    };

    const prevSlide = () => {
        if (buttonsDisabled) return;
        setCurrentIndex((prev) => prev - 1);
        temporarilyDisableButtons();
    };



    const handleTransitionEnd = () => {
        if (currentIndex >= fullSlides.length - 1) {
            setIsTransitioning(false);
            setCurrentIndex(1);
        } else if (currentIndex <= 0) {
            setIsTransitioning(false);
            setCurrentIndex(fullSlides.length - 2);
        } else {
            setIsTransitioning(true);
        }
    };


    const activeArray = display
        ? array
        : array.length > 1
            ? array.slice(1, -1).flat()
            : array.flat();

    const fullSlides = [
        activeArray[activeArray.length - 1],
        ...activeArray,
        activeArray[0],
    ];

    return (
        <div className={`${styles.slider} 
            ${type === "Testimonials" ?
                styles.testSlider :
                type === "Awards" ? styles.awardsSlider : styles.gallerySlider}`}>

            {type === "Testimonials" && (
                <button className={styles.btn} onClick={prevSlide} disabled={buttonsDisabled}>
                    <img src="/assets/icons/Slider/Vector (Stroke) (2).svg" alt="Previous" />
                </button>
            )}

            <div className={`${styles.slideContainer} ${type === "Gallery" ? styles.gallerycontainer : ""}`}>
                <div
                    className={styles.slidesTrack}
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: isTransitioning ? "transform 0.25s ease-in-out" : "none",
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {fullSlides.map((group, index) => (
                        <div
                            className={`${styles.slide} 
                            ${type === "Testimonials" ?
                                    styles.slidePadding :
                                    type === "Awards" ? styles.awardsSlide : styles.gallerySlide}`}
                            key={index}
                        >
                            {Array.isArray(group) ? (
                                group.map((item, subIndex) => (
                                    <CardComponent key={subIndex} {...item} />
                                ))
                            ) : (
                                <CardComponent key={index} {...group} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {type === "Testimonials" && (
                <button className={styles.btn} onClick={nextSlide} disabled={buttonsDisabled}>
                    <img src="/assets/icons/Slider/Vector (Stroke).svg" alt="Next" />
                </button>
            )}

            {type === "Testimonials" && (
                <div className={styles.mobileBtns}>
                    <button className={styles.btn2} onClick={prevSlide} disabled={buttonsDisabled}>
                        <img src="/assets/icons/Slider/Vector (Stroke) (2).svg" alt="Previous" />
                    </button>

                    <button className={styles.btn2} onClick={nextSlide} disabled={buttonsDisabled}>
                        <img src="/assets/icons/Slider/Vector (Stroke).svg" alt="Next" />
                    </button>
                </div>
            )}

            {type === "Awards" && (
                <div className={styles.awardsBtnsSection}>
                    <span className={styles.moreAwards}>8 More Awards</span>

                    <div className={styles.awardsBtns}>
                        <button className={styles.awardBtn} onClick={prevSlide} disabled={buttonsDisabled}>
                            <img src="/assets/icons/Slider/Vector (Stroke) (2).svg" alt="Previous" />
                        </button>

                        <button className={styles.awardBtn} onClick={nextSlide} disabled={buttonsDisabled}>
                            <img src="/assets/icons/Slider/Vector (Stroke).svg" alt="Next" />
                        </button>
                    </div>
                </div>
            )}

            {type === "Gallery" && (
                <div className={styles.galleryBtnsSection}>
                    <h4 className={styles.galleryTitle}>{galleryTitle}</h4>

                    <div className={styles.awardsBtns}>
                        <button className={styles.awardBtn} onClick={prevSlide} disabled={buttonsDisabled}>
                            <img src="/assets/icons/Slider/Vector (Stroke) (2).svg" alt="Previous" />
                        </button>

                        <button className={styles.awardBtn} onClick={nextSlide} disabled={buttonsDisabled}>
                            <img src="/assets/icons/Slider/Vector (Stroke).svg" alt="Next" />
                        </button>
                    </div>
                </div>
            )}


        </div>
    );
};


export default Slider;
