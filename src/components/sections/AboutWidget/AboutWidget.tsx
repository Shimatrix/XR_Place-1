import React from 'react';
import { useState } from 'react';
import styles from './AboutWidget.module.scss';
import { mockAboutWidget } from '../../../mocks/aboutWidgetData';
import widgetImg from '../../../assets/images/widget/widget.png';
import widgetImg1 from '../../../assets/images/widget/widget-01.png';
import widgetImg2 from '../../../assets/images/widget/widget-02.png';
import widgetImg3 from '../../../assets/images/widget/widget-03.png';
import widgetImg4 from '../../../assets/images/widget/widget-04.png';
import widgetImg5 from '../../../assets/images/widget/widget-05.png';

const features = [
  'ПАНОРАМНЫЙ ОБЗОР ЗДАНИЯ',
  'ПЛАНИРОВКА И ИНТЕРЬЕР',
  'СВОБОДА ПЕРЕМЕЩЕНИЯ',
  'ТОЧНОСТЬ ПЛАНИРОВКИ',
  'ИНТЕРАКТИВНОСТЬ',
  'КРОССПЛАТФОРМЕННОСТЬ'
];

const featureImages = [
  widgetImg,
  widgetImg1,
  widgetImg2,
  widgetImg3,
  widgetImg4,
  widgetImg5
];

const AboutWidget: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const imageIndex = activeIndex !== null ? activeIndex : 0;

  return (
    <section id='about-widget' className={styles.aboutWidgetBlock}>
      <span className={styles.label}>ВИДЖЕТ</span>
      <h2 className={styles.title}>
        ЧТО <span className={styles.accent}>УМЕЕТ</span> ВИДЖЕТ
      </h2>
      <div className={styles.desc1}>
        Наш виджет позволяет создавать захватывающее и реалистичное
        представление об объекте недвижимости
      </div>
      <div className={styles.desc2}>
        Это помогает вашим клиентам принимать обоснованные решения. Мы
        предлагаем простые в использовании решения, которые легко интегрируются
        в ваши бизнес-процессы.
      </div>
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
            alt={`Виджет: ${features[imageIndex]}`}
            className={styles.widgetImg}
          />
          {activeIndex !== null && (
            <div className={styles.featureDescription}>
              <div className={styles.featureNumber}>
                {mockAboutWidget[activeIndex].number}
              </div>
              <div className={styles.featureText}>
                {mockAboutWidget[activeIndex].text}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutWidget;
