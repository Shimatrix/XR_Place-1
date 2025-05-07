import { useTranslation } from 'react-i18next';
import { Title, TitleHighlight } from '../../ui/h2/Title';
import { Accordion } from '../../ui/accordion/accordion';
import styles from './FAQBlock.module.css';

export const FAQBlock = () => {
  const { t } = useTranslation();

  const items = t('faq.items', { returnObjects: true }) as string[];
  const answer = t('faq.answer');

  return (
    <div className={styles.block}>
      <Title label={t('faq.label')}>
        <TitleHighlight>{t('faq.title').split(' ')[0]} </TitleHighlight>
        {t('faq.title').split(' ').slice(1).join(' ')}
      </Title>
      <div className={styles.accordionContainer}>
        {items.map((item, index) => (
          <Accordion key={index} title={item}>
            {answer}
          </Accordion>
        ))}
      </div>
    </div>
  );
};
