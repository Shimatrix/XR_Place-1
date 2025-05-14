import { useTranslation } from 'react-i18next';
import { Title, TitleHighlight } from '../../ui/h2/Title';
import { AccordionItem } from '../../ui/accordion/accordionItem';
import styles from './FAQBlock.module.css';

export const FAQBlock = () => {
  const { t } = useTranslation();

  const items = t('faq.items', { returnObjects: true }) as string[];
  const answer = t('faq.answer');

  const title = t('faq.title');
  const [highlight, ...rest] = title.split(' ');

  return (
    <div className={styles.block}>
      <Title label={t('faq.label')} className={styles.titleContainer}>
        <TitleHighlight>{highlight} </TitleHighlight>
        {rest.join(' ')}
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
