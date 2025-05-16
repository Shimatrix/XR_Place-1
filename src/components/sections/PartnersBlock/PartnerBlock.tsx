import { useTranslation } from 'react-i18next';
import { TitlePartner, TitleHighlight } from '../../ui/h2/TitlePartner';
import styles from './PartnerBlock.module.scss';

export const PartnersBlock = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.partnerBlock}>
      {/* ДЕСКТОП */}
      <div className={styles.desktopLayoutWrapper}>
        <div className={styles.animationTitle}>
          <TitlePartner label={t('philosophy.label')}>
            {t('philosophy.title.main')}{' '}
            <TitleHighlight>{t('philosophy.title.highlight')}</TitleHighlight>
          </TitlePartner>
        </div>
        <div className={styles.scrollLine} />
        <div className={styles.desktopGrid}>
          {/* ЛЕВАЯ КОЛОНКА — ФОТОГРАФИЯ */}
          <div className={styles.blockImg}>
            <img
              src='../src/assets/images/room.jpg'
              alt='фотография комнаты'
              className={styles.roomImg}
            />
          </div>

          {/* ЦЕНТРАЛЬНАЯ КОЛОНКА — ОПИСАНИЕ */}
          <div className={styles.description}>
            <p>{t('philosophy.text1')}</p>
          </div>

          {/* ЦЕНТРАЛЬНАЯ КОЛОНКА — ЗАГОЛОВОК */}
          <div className={styles.subTitleWrapper}>
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
          <div className={styles.imgPoint}>
            <img
              src='../src/assets/images/GroupPoints.svg'
              alt='декоративный элемент'
            />
          </div>
        </div>
      </div>

      {/* МОБИЛЬНАЯ ВЕРСИЯ */}
      <div className={styles.mobileLayoutWrapper}>
        <div className={styles.mobileGrid}>
          <div className={styles.animationTitle}>
            <TitlePartner label={t('philosophy.label')}>
              <div className={styles.mobileTitle}>
                {t('philosophy.title.main')}
                <TitleHighlight>
                  {t('philosophy.title.highlight')}
                </TitleHighlight>
              </div>
            </TitlePartner>
          </div>
          {/* ОПИСАНИЕ */}
          <div className={styles.mobileDescription}>
            <p>{t('philosophy.text1')}</p>
          </div>
          {/* ИЗОБРАЖЕНИЕ */}
          <div className={styles.mobileImg}>
            <img
              src='../src/assets/images/room.jpg'
              alt='фотография комнаты'
              className={styles.roomImg}
            />
          </div>
          {/* ПОДЗАГОЛОВОК */}
          <div className={styles.mobileSubTitleWrapper}>
            <p className={styles.subTitle}> {t('philosophy.text2.line1')}</p>
            <p className={styles.subTitle}> {t('philosophy.text2.line2')}</p>
            <p className={styles.subTitle}> {t('philosophy.text2.line3')} </p>
            <p className={styles.subTitle}> {t('philosophy.text2.line4')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
