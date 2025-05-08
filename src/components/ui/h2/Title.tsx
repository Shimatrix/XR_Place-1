import { ReactNode } from 'react';
import styles from './Title.module.css';

interface TitleProps {
  label?: string;
  children: ReactNode;
  className?: string;
}

export const Title = ({ label, children, className = '' }: TitleProps) => (
  <div className={`${styles.container} ${className}`}>
    {label && <span className={styles.label}>{label}</span>}
    <h2 className={styles.heading}>{children}</h2>
  </div>
);

export const TitleHighlight = ({ children }: { children: ReactNode }) => (
  <span className={styles.highlight}>{children}</span>
);

// <Title label='сотрудничество'>
//           Реализованые <TitleHighlight>проекты</TitleHighlight>
//         </Title> пример добавления в вашу секцию
