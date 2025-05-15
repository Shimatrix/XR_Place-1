import { useState, useRef, useEffect } from 'react';
import styles from './AccordionItem.module.css';
import { ExpandIcon } from '../expand-icon/ExpandIcon';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export const AccordionItem = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div
      className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}
    >
      <button
        className={styles.accordionItemButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.accordionItemTitle}>{title}</span>
        <span className={styles.accordionItemIcon}>
          <ExpandIcon isExpanded={isOpen} />
        </span>
      </button>
      <div
        ref={contentRef}
        className={styles.accordionItemContent}
        style={{ height }}
      >
        <div
          className={`${styles.accordionItemText} ${isOpen ? styles.slideFadeIn : ''}`}
        >
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};
