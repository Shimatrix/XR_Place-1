import { ReactNode } from 'react';
import styles from './BusinessTeamSectionTitle.module.css';

interface BusinessTeamSectionTitleProps {
  label?: string;
  children: ReactNode;
}

export const BusinessTeamSectionTitle = ({
  label,
  children
}: BusinessTeamSectionTitleProps) => (
  <div className={styles.container}>
    {label && <span className={styles.label}>{label}</span>}
    <h2 className={styles.heading}>{children}</h2>
  </div>
);

export const BusinessTeamTitleHighlight = ({
  children
}: {
  children: ReactNode;
}) => <span className={styles.highlight}>{children}</span>;
