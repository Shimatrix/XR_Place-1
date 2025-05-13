import { JSX, useEffect, useState } from 'react';
import styles from './HowItWorks.module.scss';
import EllipseGreen from '/src/assets/images/EllipseGreen.svg?react';
import Ellipse from '/src/assets/images/Ellipse.svg?react';
import Subtract from '/src/assets/images/Subtract.svg?react';
import How from '/src/assets/images/How.svg?react';
import HowEN from '/src/assets/images/HowEN.svg?react';
import It from '/src/assets/images/It.svg?react';
import ItEn from '/src/assets/images/ItEn.svg?react';
import HowMobile from '/src/assets/images/HowMobile.svg?react';
import ItMobile from '/src/assets/images/ItMobile.svg?react';
import Works from '/src/assets/images/Works.svg?react';
import WorkEN from '/src/assets/images/WorksEN.svg?react';
import WillBe from '/src/assets/images/WillBe.svg?react';
import Arrow from '/src/assets/icons/Arrow.svg?react';
import { UIButton } from '../../ui/button/button';
import { ModalWindow } from '../../ModalDemo/ModalDemo';
import { useMediaQuery } from 'react-responsive';
import { useInView } from '../../../hooks/useInView/useInView';

const HowItWorks: React.FC = (): JSX.Element => {
  let pageLanguage = 1; //Переменная для смены языка
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [step, setStep] = useState(0);

  const maxStep = isMobile ? 9 : 12;

  useEffect(() => {
    if (isInView && step < maxStep) {
      // eslint-disable-next-line no-undef
      const timer = setTimeout(() => setStep((prev) => prev + 1), 500);
      // eslint-disable-next-line no-undef
      return () => clearTimeout(timer);
    }
  }, [step, maxStep, isInView]);

  return (
    <section id='how-it-works' className={styles.section} ref={ref}>
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
          {isMobile ? (
            <>
              <div className={styles['section-title__mobile-group']}>
                {pageLanguage === 1 ? (
                  <HowEN
                    className={`
                      ${styles['section-title__how']} 
                      ${styles['section-title__svg-text']} 
                      ${step >= 1 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}
                    `}
                  />
                ) : (
                  <HowMobile
                    className={`
                      ${styles['section-title__how-en']} 
                      ${styles['section-title__svg-text']} 
                      ${step >= 1 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}
                    `}
                  />
                )}
                <Ellipse
                  className={`
                    ${styles['section-title__svg-img']} 
                    ${styles['section-title__ellipse']}
                    ${step >= 2 ? styles['section-title__svg-img--visible'] : styles['section-title__svg-img--hidden']}
                  `}
                />
                <Subtract
                  className={`
                    ${styles['section-title__svg-img']} 
                    ${styles['section-title__subtract']}
                    ${step >= 3 ? styles['section-title__svg-img--visible'] : styles['section-title__svg-img--hidden']}
                  `}
                />
                <Subtract
                  className={`
                    ${styles['section-title__svg-img']} 
                    ${styles['section-title__subtract']}
                    ${step >= 4 ? styles['section-title__svg-img--visible'] : styles['section-title__svg-img--hidden']}
                  `}
                />
              </div>
              {pageLanguage === 1 ? (
                <ItEn
                  className={`
                    ${styles['section-title__it-en']} 
                    ${styles['section-title__svg-text']} 
                    ${step >= 5 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}
                  `}
                />
              ) : (
                <ItMobile
                  className={`
                    ${styles['section-title__it']} 
                    ${styles['section-title__svg-text']} 
                    ${step >= 5 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}
                  `}
                />
              )}
            </>
          ) : (
            <>
              {pageLanguage === 1 ? (
                <HowEN
                  className={`
                    ${styles['section-title__how-en']} 
                    ${styles['section-title__svg-text']} 
                    ${step >= 1 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}
                  `}
                />
              ) : (
                <How
                  className={`
                    ${styles['section-title__how']} 
                    ${styles['section-title__svg-text']} 
                    ${step >= 1 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}
                  `}
                />
              )}
              <Ellipse
                className={`
                  ${styles['section-title__svg-img']} 
                  ${styles['section-title__ellipse']}
                  ${step >= 2 ? styles['section-title__svg-img--visible'] : styles['section-title__svg-img--hidden']}
                `}
              />
              <Subtract
                className={`
                  ${styles['section-title__svg-img']} 
                  ${styles['section-title__subtract']}
                  ${step >= 3 ? styles['section-title__svg-img--visible'] : styles['section-title__svg-img--hidden']}
                `}
              />
              <Subtract
                className={`
                  ${styles['section-title__svg-img']} 
                  ${styles['section-title__subtract']}
                  ${step >= 4 ? styles['section-title__svg-img--visible'] : styles['section-title__svg-img--hidden']}
                `}
              />
              {pageLanguage === 1 ? (
                <ItEn
                  className={`
                    ${styles['section-title__it-en']} 
                    ${styles['section-title__svg-text']} 
                    ${step >= 5 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}
                  `}
                />
              ) : (
                <It
                  className={`
                    ${styles['section-title__it']} 
                    ${styles['section-title__svg-text']} 
                    ${step >= 5 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}
                  `}
                />
              )}
            </>
          )}
        </div>
        {pageLanguage == 1 ? (
          <WorkEN
            className={`
              ${styles['section-title__works-en']} 
              ${styles['section-title__svg-text']} 
              ${step >= 6 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}
            `}
          />
        ) : isMobile ? (
          <WillBe
            className={`
              ${styles['section-title__work']} 
              ${styles['section-title__svg-text']} 
              ${step >= 6 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}
            `}
          />
        ) : (
          <Works
            className={`
              ${styles['section-title__works']} 
              ${styles['section-title__svg-text']} 
              ${step >= 6 ? styles['section-title__svg-text--visible'] : styles['section-title__svg-text--hidden']}
            `}
          />
        )}
      </h2>
      <p
        className={`
          ${styles['section__how-it-works']} 
          ${step >= 9 ? styles['section__how-it-works--visible'] : styles['section__how-it-works--hidden']}`}
      >
        Узнайте, как это работает
      </p>
      <div className={`${styles.section__paragraph}`}>
        <p
          className={`
            ${styles['section__paragraph__benefit-description']}        
            ${
              step >= (isMobile ? 8 : 10)
                ? styles['section__paragraph__benefit-description--visible']
                : styles['section__paragraph__benefit-description--hidden']
            }`}
        >
          Наши интерактивные решения помогут вашим клиентам с выбором
          недвижимости
        </p>
        <p
          className={`
            ${styles['section__paragraph__secondary-feature']}     
            ${
              step >= (isMobile ? 9 : 11)
                ? styles['section__paragraph__secondary-feature--visible']
                : styles['section__paragraph__secondary-feature--hidden']
            }`}
        >
          Создайте незабываемый опыт для своих клиентов с помощью наших
          виртуальных туров
        </p>
      </div>
      <UIButton
        className={`${styles.section__button}`}
        text={isMobile ? 'Заказать демо' : 'Назначить демо'}
        onClick={() => setIsModalOpen(true)}
        icon={<Arrow />}
      />
      <ModalWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HowItWorks;
