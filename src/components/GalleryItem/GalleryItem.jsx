import styles from "./GalleryItem.module.css";
import Slider from "../Slider/Slider";
import GalleryItemCard from "../GalleryItemCard/GalleryItemCard";


const GalleryItem = ({galleryTitle, galleryArray, galleryText}) => {
    return (
        <div className={styles.galleryItem}>
            <Slider className={styles.slider} array={galleryArray} CardComponent={GalleryItemCard} type="Gallery" galleryTitle={galleryTitle} />
            <p className={styles.galleryText}>{galleryText}</p>
        </div >
    )
}

export default GalleryItem