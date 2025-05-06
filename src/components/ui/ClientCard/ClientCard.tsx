import styles from './ClientCard.module.scss';

interface ClientCardProps {
  title: string;
  url: string;
  className?: string;
}

export function ClientCard({ title, url, className }: ClientCardProps) {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <h3 className={styles.title}>{title}</h3>
      <img className={styles.icon} src={url} />
    </div>
  );
}
