import styles from './BurgerButton.module.scss';
import { FC } from 'react';

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const BurgerButton: FC<BurgerButtonProps> = ({
  isOpen,
  onClick,
  className
}) => (
  <button
    className={`${styles.burgerButton} ${isOpen ? styles.open : ''} ${className || ''}`}
    onClick={onClick}
    aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
  >
    {!isOpen ? (
      <>
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </>
    ) : (
      <span className={styles.crossIcon}>×</span>
    )}
  </button>
);
