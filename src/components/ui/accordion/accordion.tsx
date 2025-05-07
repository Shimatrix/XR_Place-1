import { useState, useRef, useEffect } from 'react';
import styles from './Accordion.module.css';
import { ExpandIcon } from '../../ui/expand-icon/ExpandIcon';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<any>(null);
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
        className={styles.accordionButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ExpandIcon isExpanded={isOpen} className={styles.accordionItemIcon} />
      </button>
      <div
        ref={contentRef}
        className={styles.accordionItemContent}
        style={{ height }}
      >
        <div className={styles.accordionItemText}>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};
