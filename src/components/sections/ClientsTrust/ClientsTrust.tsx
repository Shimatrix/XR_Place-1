import { useTranslation } from 'react-i18next';
import { Title, TitleHighlight } from '../../ui/h2/Title';
import { ClientCard } from '../../ui/ClientCard/ClientCard';
import styles from './ClientsTrust.module.scss';

import conversionIcon from '../../../assets/icons/conversion-icon.png';
import trustIcon from '../../../assets/icons/trust-icon.png';
import planningIcon from '../../../assets/icons/planning-icon.png';
import interactiveIcon from '../../../assets/icons/interactive-icon.png';
import integrationIcon from '../../../assets/icons/integration-icon.png';
import salesIcon from '../../../assets/icons/sales-icon.png';

export function ClientsTrust() {
  const { t } = useTranslation();

  const icons = [
    conversionIcon,
    integrationIcon,
    trustIcon,
    salesIcon,
    planningIcon,
    interactiveIcon
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Title label={t('cooperation.label')}>
          <>
            {t('cooperation.title.line1')}
            <br />
            {t('cooperation.title.line2.first')}{' '}
            <TitleHighlight>
              {t('cooperation.title.line2.highlight')}
            </TitleHighlight>
          </>
        </Title>
        <p className={styles.description}>{t('cooperation.description')}</p>
      </div>
      <div className={styles.cards}>
        {icons.map((icon, index) => {
          const gridClass = `div${index + 1}`;
          return (
            <ClientCard
              key={index}
              title={t(`cooperation.cards.${index}`)}
              url={icon}
              className={styles[gridClass]}
            />
          );
        })}
      </div>
    </section>
  );
}
