import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AboutWidget.module.scss';
import { mockAboutWidget } from '../../../mocks/aboutWidgetData';

import widgetImg from '../../../assets/images/widget/widget.png';
import widgetImg1 from '../../../assets/images/widget/widget-01.png';
import widgetImg2 from '../../../assets/images/widget/widget-02.png';
import widgetImg3 from '../../../assets/images/widget/widget-03.png';
import widgetImg4 from '../../../assets/images/widget/widget-04.png';
import widgetImg5 from '../../../assets/images/widget/widget-05.png';

const featureImages = [
  widgetImg,
  widgetImg1,
  widgetImg2,
  widgetImg3,
  widgetImg4,
  widgetImg5
];

const featureKeys = [
  'panoramic',
  'layout',
  'movement',
  'accuracy',
  'interactivity',
  'crossplatform'
];

const AboutWidget: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const imageIndex = activeIndex !== null ? activeIndex : 0;

  const features: string[] = t('widget.features', {
    returnObjects: true
  }) as string[];
  const description = t('widget.description');
  const [desc1, ...descRest] = description.split('. ');
  const desc2 = descRest.join('. ');

  const getFeatureDescription = (index: number) =>
    t(`widget.featureDescriptions.${featureKeys[index]}`);

  return (
    <section id='about-widget' className={styles.aboutWidgetBlock}>
      <span className={styles.label}>{t('widget.label')}</span>
      <h2 className={styles.title}>
        {t('widget.title.main')}{' '}
        <span className={styles.accent}>{t('widget.title.highlight')}</span>
      </h2>

      <div className={styles.desc1}>{desc1.trim()}.</div>
      <div className={styles.desc2}>{desc2.trim()}</div>

      <div className={styles.contentRow}>
        <div className={styles.verticalLine} />

        <div className={styles.featuresList}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${styles.featureItem} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className={styles.separator} />
              {feature}
            </div>
          ))}
        </div>

        <div className={styles.featureContent}>
          <img
            src={featureImages[imageIndex]}
            alt={`Widget feature ${imageIndex + 1}`}
            className={styles.widgetImg}
          />
          {activeIndex !== null && (
            <div className={styles.featureDescription}>
              <div className={styles.featureNumber}>
                {mockAboutWidget[activeIndex].number}
              </div>
              <div className={styles.featureText}>
                {getFeatureDescription(activeIndex)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutWidget;
