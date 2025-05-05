import styles from './Gallery.module.css'
import Title from "../Title/Title"
import GalleryItem from '../GalleryItem/GalleryItem'

const Gallery = ({ btnText, title, text, array, itemTitles, itemTexts }) => {
    return (
        <section className={styles.gallery}>
            <Title btntext={btnText} title={title} text={text} />
            <div>
                <div className={styles.btnsContainer}>
                    <button key="all">All</button>
                    {itemTitles.map((title, titleIndex) => (
                        <button key={titleIndex}>{title}</button>
                    ))}
                </div>
                <div className={styles.galleryItemsContainer}>
                    {array.map((item, itemIndex) => (
                        <GalleryItem 
                            key={itemIndex} 
                            galleryArray={item} 
                            galleryTitle={itemTitles[itemIndex]} 
                            galleryText={itemTexts[itemIndex]} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery