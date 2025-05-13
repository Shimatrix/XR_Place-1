import { JSX, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './HowItWorks.module.scss';
import Ellipse from '/src/assets/images/Ellipse.svg?react';
import EllipseGreen from '/src/assets/images/EllipseGreen.svg?react';
import Subtract from '/src/assets/images/Subtract.svg?react';
import Kak from '/src/assets/images/Kak.svg?react';
import Eto from '/src/assets/images/Eto.svg?react';
import Rabotaet from '/src/assets/images/Rabotaet.svg?react';
import HowEn from '/src/assets/images/howEn.svg?react';
import ItEn from '/src/assets/images/ItEn.svg?react';
import WorksEn from '/src/assets/images/WorksEn.svg?react';

import Arrow from '/src/assets/icons/Arrow.svg?react';
import { UIButton } from '../../ui/button/button';
import { ModalWindow } from '../../ModalDemo/ModalDemo';

const HowItWorks: React.FC = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (step < 12) {
      const timer = window.setTimeout(() => setStep((prev) => prev + 1), 500);
      return () => window.clearTimeout(timer);
    }
  }, [step]);

  return (
    <section id='how-it-works' className={styles.section}>
      <EllipseGreen
        className={`
          ${styles['section__ellipse--green']}
          ${step >= 7 ? styles['section__ellipse--green--visible'] : styles['section__ellipse--green--hidden']}`}
      />
      <div
        className={`
          ${styles['section__circle-line']}
          ${step >= 8 ? styles.visible : styles.hidden}`}
      >
        <div className={`${styles['section__circle-line--line']}`} />
        <div className={`${styles['section__circle-line--circle']}`} />
      </div>

      <h2 className={styles['section-title']}>
        <div className={styles['section-title__wrap']}>
          {step >= 1 &&
            (i18n.language === 'ru' ? (
              <Kak
                className={`${styles['section-title__how']} ${styles['section-title__svg-text']} ${styles[`section-title__svg-text--${step >= 1 ? 'visible' : 'hidden'}`]}`}
              />
            ) : (
              <HowEn
                className={`${styles['section-title__how']} ${styles['section-title__svg-text']} ${styles[`section-title__svg-text--${step >= 1 ? 'visible' : 'hidden'}`]}`}
              />
            ))}

          {step >= 2 && (
            <Ellipse
              className={`${styles['section-title__svg-img']} ${styles['section-title__ellipse']} ${styles[`section-title__svg-img--${step >= 2 ? 'visible' : 'hidden'}`]}`}
            />
          )}

          {step >= 3 && (
            <Subtract
              className={`${styles['section-title__svg-img']} ${styles['section-title__subtract']} ${styles[`section-title__svg-img--${step >= 3 ? 'visible' : 'hidden'}`]}`}
            />
          )}

          {step >= 4 && (
            <Subtract
              className={`${styles['section-title__svg-img']} ${styles['section-title__subtract-2']} ${styles[`section-title__svg-img--${step >= 4 ? 'visible' : 'hidden'}`]}`}
            />
          )}

          {step >= 5 &&
            (i18n.language === 'ru' ? (
              <Eto
                className={`${styles['section-title__it']} ${styles['section-title__svg-text']} ${styles[`section-title__svg-text--${step >= 5 ? 'visible' : 'hidden'}`]}`}
              />
            ) : (
              <ItEn
                className={`${styles['section-title__it']} ${styles['section-title__svg-text']} ${styles[`section-title__svg-text--${step >= 5 ? 'visible' : 'hidden'}`]}`}
              />
            ))}
        </div>

        {step >= 6 &&
          (i18n.language === 'ru' ? (
            <Rabotaet
              className={`${styles['section-title__work']} ${styles['section-title__svg-text']} ${styles[`section-title__svg-text--${step >= 6 ? 'visible' : 'hidden'}`]}`}
            />
          ) : (
            <WorksEn
              className={`${styles['section-title__work']} ${styles['section-title__svg-text']} ${styles[`section-title__svg-text--${step >= 6 ? 'visible' : 'hidden'}`]}`}
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
          className={`${styles['section__paragraph__benefit-description']} ${step >= 10 ? styles['section__paragraph__benefit-description--visible'] : styles['section__paragraph__benefit-description--hidden']}`}
        >
          {t('howItWorks.desc1')}
        </p>
        <p
          className={`${styles['section__paragraph__secondary-feature']} ${step >= 11 ? styles['section__paragraph__secondary-feature--visible'] : styles['section__paragraph__secondary-feature--hidden']}`}
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
