import Modal from "react-modal";
import styles from "./ImageModal.module.css";

export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null;

  const { urls, alt_description, user } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
        content: { maxWidth: "80%", margin: "auto" },
      }}
    >
      <img className={styles.image} src={urls.regular} alt={alt_description} />
      <p className={styles.author}>Author: {user.name}</p>
      <button className={styles.closeBtn} onClick={onClose}>
        Close
      </button>
    </Modal>
  );
}
