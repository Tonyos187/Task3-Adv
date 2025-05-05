import { useState } from 'react';
import styles from './Gallery.module.css';
import Title from "../Title/Title";
import GalleryItem from '../GalleryItem/GalleryItem';

const Gallery = ({ btnText, title, text, array, itemTitles, itemTexts }) => {
    const [visibleSliders, setVisibleSliders] = useState([]);

    const toggleSlider = (title) => {
        if (visibleSliders.includes(title)) {
            setVisibleSliders(visibleSliders.filter(slider => slider !== title));
        } else {
            setVisibleSliders([...visibleSliders, title]);
        }
    };

    const showAll = () => {
        setVisibleSliders([...itemTitles]);
    };

    return (
        <section className={styles.gallery}>
            <Title btntext={btnText} title={title} text={text} />

            <div className={styles.galleryContainer}>
                <div className={styles.btnsContainer}>
                    <button className={styles.galleryBtn} onClick={showAll}>
                        All
                    </button>
                    {itemTitles.map((title, titleIndex) => (
                        <button
                            className={`${styles.galleryBtn} ${visibleSliders.includes(title) ? styles.active : ''}`}
                            key={titleIndex}
                            onClick={() => toggleSlider(title)}
                        >
                            {title}
                        </button>
                    ))}
                </div>

                <div className={styles.galleryItemsContainer}>
                    {visibleSliders.map((visibleTitle) => {
                        const itemIndex = itemTitles.indexOf(visibleTitle);
                        if (itemIndex === -1) return null;

                        return (
                            <GalleryItem
                                key={itemIndex}
                                galleryArray={array[itemIndex]}
                                galleryTitle={itemTitles[itemIndex]}
                                galleryText={itemTexts[itemIndex]}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Gallery; 