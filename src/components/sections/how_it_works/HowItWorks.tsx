import { JSX, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './HowItWorks.module.scss';

import EllipseGreen from '/src/assets/images/EllipseGreen.svg?react';
import Ellipse from '/src/assets/images/Ellipse.svg?react';
import Subtract from '/src/assets/images/Subtract.svg?react';

// RU
import How from '/src/assets/images/How.svg?react';
import It from '/src/assets/images/It.svg?react';
import Works from '/src/assets/images/Works.svg?react';

// EN
import HowEN from '/src/assets/images/HowEN.svg?react';
import ItEN from '/src/assets/images/ItEN.svg?react';
import WorksEN from '/src/assets/images/WorksEN.svg?react';

import Arrow from '/src/assets/icons/Arrow.svg?react';
import { UIButton } from '../../ui/button/button';
import { ModalWindow } from '../../ModalDemo/ModalDemo';
import { useMediaQuery } from 'react-responsive';
import { useInView } from '../../../hooks/useInView/useInView';

const HowItWorks: React.FC = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const maxStep = isMobile ? 9 : 12;

  const isRu = i18n.language === 'ru';

  useEffect(() => {
    if (isInView && step < maxStep) {
      const timer = setTimeout(() => setStep((prev) => prev + 1), 500);
      return () => clearTimeout(timer);
    }
  }, [step, maxStep, isInView]);

  return (
    <section id='how-it-works' className={styles.section} ref={ref}>
      <EllipseGreen
        className={`
          ${styles['section__ellipse--green']}
          ${step >= 7 ? styles['section__ellipse--green--visible'] : styles['section__ellipse--green--hidden']}
        `}
      />

      <div
        className={`
          ${styles['section__circle-line']}
          ${step >= 8 ? styles.visible : styles.hidden}`}
      >
        <div className={styles['section__circle-line--line']} />
        <div className={styles['section__circle-line--circle']} />
      </div>

      <h2 className={styles['section-title']}>
        <div className={styles['section-title__wrap']}>
          {step >= 1 &&
            (isRu ? (
              <How
                className={`${styles['section-title__how']} ${styles['section-title__svg-text']} ${step >= 1 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}`}
              />
            ) : (
              <HowEN
                className={`${styles['section-title__how-en']} ${styles['section-title__svg-text']} ${step >= 1 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}`}
              />
            ))}

          {step >= 2 && (
            <Ellipse
              className={`${styles['section-title__svg-img']} ${styles['section-title__ellipse']} ${step >= 2 ? styles['section-title__svg-img--visible'] : styles['section-title__svg-img--hidden']}`}
            />
          )}

          {step >= 3 && (
            <Subtract
              className={`${styles['section-title__svg-img']} ${styles['section-title__subtract']} ${step >= 3 ? styles['section-title__svg-img--visible'] : styles['section-title__svg-img--hidden']}`}
            />
          )}

          {step >= 4 && (
            <Subtract
              className={`${styles['section-title__svg-img']} ${styles['section-title__subtract-2']} ${step >= 4 ? styles['section-title__svg-img--visible'] : styles['section-title__svg-img--hidden']}`}
            />
          )}

          {step >= 5 &&
            (isRu ? (
              <It
                className={`${styles['section-title__it']} ${styles['section-title__svg-text']} ${step >= 5 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}`}
              />
            ) : (
              <ItEN
                className={`${styles['section-title__it-en']} ${styles['section-title__svg-text']} ${step >= 5 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}`}
              />
            ))}
        </div>

        {step >= 6 &&
          (isRu ? (
            <Works
              className={`${styles['section-title__work']} ${styles['section-title__svg-text']} ${step >= 6 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}`}
            />
          ) : (
            <WorksEN
              className={`${styles['section-title__works-en']} ${styles['section-title__svg-text']} ${step >= 6 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}`}
            />
          ))}
      </h2>

      <p
        className={`${styles['section__how-it-works']} ${step >= 9 ? styles['section__how-it-works--visible'] : styles['section__how-it-works--hidden']}`}
      >
        {t('howItWorks.subtitle')}
      </p>

      <div className={styles.section__paragraph}>
        <p
          className={`
          ${styles['section__paragraph__benefit-description']}
          ${step >= (isMobile ? 8 : 10) ? styles['section__paragraph__benefit-description--visible'] : styles['section__paragraph__benefit-description--hidden']}
        `}
        >
          {t('howItWorks.desc1')}
        </p>
        <p
          className={`
          ${styles['section__paragraph__secondary-feature']}
          ${step >= (isMobile ? 9 : 11) ? styles['section__paragraph__secondary-feature--visible'] : styles['section__paragraph__secondary-feature--hidden']}
        `}
        >
          {t('howItWorks.desc2')}
        </p>
      </div>

      <UIButton
        className={styles.section__button}
        text={t('howItWorks.button')}
        onClick={() => setIsModalOpen(true)}
        icon={<Arrow />}
      />

      <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HowItWorks;
