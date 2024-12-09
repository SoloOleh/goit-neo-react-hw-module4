import styles from "./ImageCard.module.css";

export default function ImageCard({ image, onImageClick }) {
  const { urls, alt_description } = image;
  return (
    <div className={styles.card} onClick={() => onImageClick(image)}>
      <img className={styles.image} src={urls.small} alt={alt_description} />
    </div>
  );
}
