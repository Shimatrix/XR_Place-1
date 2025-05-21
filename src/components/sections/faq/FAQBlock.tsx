import { useTranslation } from 'react-i18next';
import { Title, TitleHighlight } from '../../ui/h2/Title';
import { AccordionItem } from '../../ui/accordion/accordionItem';
import styles from './FAQBlock.module.css';

export const FAQBlock = () => {
  const { t } = useTranslation();

  const items = t('faq.items', { returnObjects: true }) as string[];
  const answer = t('faq.answer');
  const label = t('faq.label');

  const titleLine1 = t('faq.titleLine1', { returnObjects: true }) as {
    highlight: string;
    rest: string;
  };
  const titleLine2 = t('faq.titleLine2');

  return (
    <div className={styles.block}>
      <Title label={label}>
        <div className={styles.titleContainer}>
          <span className={styles.titleMask}>
            <span className={styles.titleSlide}>
              <TitleHighlight>{titleLine1.highlight}</TitleHighlight>{' '}
              {titleLine1.rest}
            </span>
          </span>
          <span className={styles.titleMask}>
            <span className={styles.titleSlide}>{titleLine2}</span>
          </span>
        </div>
      </Title>

      <div className={styles.accordionContainer}>
        {items.map((item, index) => (
          <AccordionItem key={index} title={item}>
            {answer}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};
