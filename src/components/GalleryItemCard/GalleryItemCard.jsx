import styles from "./GalleryItemCard.module.css";

const GalleryItemCard = ({ img, title }) => {
    return (
        <div className={styles.galleryItemCard}>
            <img className={styles.galleryItemCardImg} src={img} alt={title} />
        </div>
    )
}

export default GalleryItemCard;