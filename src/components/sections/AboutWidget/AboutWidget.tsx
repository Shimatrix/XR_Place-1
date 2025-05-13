import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AboutWidget.module.scss';
import widgetImg from '../../../assets/images/widget/widget.png';

const AboutWidget: React.FC = () => {
  const { t } = useTranslation();
  const features: string[] = t('widget.features', {
    returnObjects: true
  }) as string[];

  return (
    <section id='about-widget' className={styles.aboutWidgetBlock}>
      <span className={styles.label}>{t('widget.label')}</span>
      <h2 className={styles.title}>
        {t('widget.title.main')}{' '}
        <span className={styles.accent}>{t('widget.title.highlight')}</span>
      </h2>

      <div className={styles.desc1}>
        {t('widget.description').split('.')[0]}.
      </div>
      <div className={styles.desc2}>
        {t('widget.description').split('. ').slice(1).join('. ')}
      </div>

      <div className={styles.contentRow}>
        <div className={styles.verticalLine} />

        <div className={styles.featuresList}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <span className={styles.separator} />
              {feature}
            </div>
          ))}
        </div>

        <img
          src={widgetImg}
          alt='Скриншот виджета'
          className={styles.widgetImg}
        />
      </div>
    </section>
  );
};

export default AboutWidget;
