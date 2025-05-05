import React from 'react';
import styles from './Widget.module.css';

import playSvg from '../../../assets/images/widget/play.svg';
import backgroundImage from '../../../assets/images/widget/widget.png';

export const WidgetSection: React.FC = () => (
  <section className={styles.heroSection}>
    <div
      className={styles.heroImage}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <img src={playSvg} alt='Play' className={styles.centeredSvg} />
    </div>
  </section>
);
