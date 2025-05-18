import { useTranslation } from 'react-i18next';
import { TitlePartner, TitleHighlight } from '../../ui/h2/TitlePartner';
import styles from './PartnerBlock.module.scss';
import { useInView } from '../../../hooks/useInView/useInView';
import { useEffect, useState } from 'react';

export const PartnersBlock = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const { ref, isInView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);

  return (
    <section ref={ref} className={styles.partnerBlock}>
      {/* ДЕСКТОП */}
      <div
        className={`${styles.desktopLayoutWrapper} ${isVisible ? styles.visible : ''}`}
      >
        <div
          className={`${styles.animationTitle} ${isVisible ? styles.visible : ''}`}
        >
          <TitlePartner label={t('philosophy.label')}>
            {t('philosophy.title.main')}{' '}
            <TitleHighlight>{t('philosophy.title.highlight')}</TitleHighlight>
          </TitlePartner>
        </div>
        <div
          className={`${styles.scrollLine} ${isVisible ? styles.visible : ''}`}
        />
        <div className={styles.desktopGrid}>
          {/* ЛЕВАЯ КОЛОНКА — ФОТОГРАФИЯ */}
          <div
            className={`${styles.blockImg} ${isVisible ? styles.visible : ''}`}
          >
            <img
              src='../src/assets/images/room.jpg'
              alt='фотография комнаты'
              className={styles.roomImg}
              loading='lazy'
            />
          </div>

          {/* ЦЕНТРАЛЬНАЯ КОЛОНКА — ОПИСАНИЕ */}
          <div
            className={`${styles.description} ${isVisible ? styles.visible : ''}`}
          >
            <p>{t('philosophy.text1')}</p>
          </div>

          {/* ЦЕНТРАЛЬНАЯ КОЛОНКА — ЗАГОЛОВОК */}
          <div
            className={`${styles.subTitleWrapper} ${isVisible ? styles.visible : ''}`}
          >
            <p className={styles.subTitle}>
              <span>{t('philosophy.text2.line1')}</span>
              <br />
              <span>{t('philosophy.text2.line2')}</span>
              <br />
              <span className={styles.textAlignOne}>
                {t('philosophy.text2.line3')}
              </span>
              <br />
              <span className={styles.textAlignTwo}>
                {t('philosophy.text2.line4')}
              </span>
            </p>
          </div>

          {/* ПРАВАЯ КОЛОНКА — ДЕКОР */}
          <div
            className={`${styles.imgPoint} ${isVisible ? styles.visible : ''}`}
          >
            <img
              src='../src/assets/images/GroupPoints.svg'
              alt='декоративный элемент'
              loading='lazy'
            />
          </div>
        </div>
      </div>

      {/* МОБИЛЬНАЯ ВЕРСИЯ */}
      <div
        className={`${styles.mobileLayoutWrapper} ${isVisible ? styles.visible : ''}`}
      >
        <div className={styles.mobileGrid}>
          <div
            className={`${styles.mobileAnimationTitle} ${isVisible ? styles.visible : ''}`}
          >
            <TitlePartner label={t('philosophy.label')}>
              <div
                className={`${styles.mobileTitle} ${isVisible ? styles.visible : ''}`}
              >
                {t('philosophy.title.main')}
                <TitleHighlight>
                  {t('philosophy.title.highlight')}
                </TitleHighlight>
              </div>
            </TitlePartner>
          </div>
          {/* ОПИСАНИЕ */}
          <div
            className={`${styles.mobileDescription} ${isVisible ? styles.visible : ''}`}
          >
            <p>{t('philosophy.text1')}</p>
          </div>
          {/* ИЗОБРАЖЕНИЕ */}
          <div
            className={`${styles.mobileImg} ${isVisible ? styles.visible : ''}`}
          >
            <img
              src='../src/assets/images/room.jpg'
              alt='фотография комнаты'
              className={styles.roomImg}
            />
          </div>
          {/* ПОДЗАГОЛОВОК */}
          <div
            className={`${styles.mobileSubTitleWrapper} ${isVisible ? styles.visible : ''}`}
          >
            <p className={styles.subTitle}> {t('philosophy.text2.line1')}</p>
            <p className={styles.subTitle}> {t('philosophy.text2.line2')}</p>
            <p className={styles.subTitle}> {t('philosophy.text2.line3')}</p>
            <p className={styles.subTitle}> {t('philosophy.text2.line4')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
