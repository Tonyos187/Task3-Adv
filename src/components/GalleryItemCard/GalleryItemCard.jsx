import styles from "./GalleryItemCard.module.css";

const GalleryItemCard = ({ img, title }) => {
    return (
        <img className={styles.galleryItemCardImg} src={img} alt={title} />
    )
}

export default GalleryItemCard;