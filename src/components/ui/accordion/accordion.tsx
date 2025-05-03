import { useState } from 'react';
import styles from './Accordion.module.css';
import { ExpandIcon } from '../../ui/expand-icon/ExpandIcon';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button
        className={styles.accordionItem}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ExpandIcon className={styles.accordionItemIcon} />
      </button>
      {isOpen && <div className={styles.accordionItemText}>{children}</div>}
    </div>
  );
};
