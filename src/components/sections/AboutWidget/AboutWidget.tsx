import React from 'react';
import styles from './AboutWidget.module.scss';
import widgetImg from '../../../assets/images/widget/widget.png';

const features = [
  'ПАНОРАМНЫЙ ОБЗОР ЗДАНИЯ',
  'ПЛАНИРОВКА И ИНТЕРЬЕР',
  'СВОБОДА ПЕРЕМЕЩЕНИЯ',
  'ТОЧНОСТЬ ПЛАНИРОВКИ',
  'ИНТЕРАКТИВНОСТЬ',
  'КРОССПЛАТФОРМЕННОСТЬ'
];

const AboutWidget: React.FC = () => (
  <section id='about-widget' className={styles.aboutWidgetBlock}>
    <span className={styles.label}>ВИДЖЕТ</span>
    <h2 className={styles.title}>
      ЧТО <span className={styles.accent}>УМЕЕТ</span> ВИДЖЕТ
    </h2>
    <div className={styles.desc1}>
      Наш виджет позволяет создавать захватывающее и реалистичное представление
      об объекте недвижимости
    </div>
    <div className={styles.desc2}>
      Это помогает вашим клиентам принимать обоснованные решения. Мы предлагаем
      простые в использовании решения, которые легко интегрируются в ваши
      бизнес-процессы.
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

export default AboutWidget;
