import { useEffect, useRef, useState } from 'react';
import styles from './ClientCard.module.scss';

interface ClientCardProps {
  title: string;
  url: string;
  className?: string;
  delay?: number;
}

export function ClientCard({
  title,
  url,
  className,
  delay = 0
}: ClientCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${className || ''} ${isVisible ? styles.visible : ''}`}
    >
      <h3 className={styles.title}>{title}</h3>
      <img className={styles.icon} src={url} alt={title} />
    </div>
  );
}
