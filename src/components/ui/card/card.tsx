import styles from './Card.module.css';

interface CardProps {
  imageUrl: string;
  captionLine1: string;
  captionLine2: string;
  className?: string;
}

export const Card = ({
  imageUrl,
  captionLine1,
  captionLine2,
  className = ''
}: CardProps) => (
  <div className={`${styles.card} ${className}`}>
    <img
      src={imageUrl}
      alt={`${captionLine1} ${captionLine2}`}
      className={styles.image}
    />
    <div className={styles.caption}>
      <p className={styles.captionLine1}>{captionLine1}</p>
      <p className={styles.captionLine2}>{captionLine2}</p>
    </div>
  </div>
);
