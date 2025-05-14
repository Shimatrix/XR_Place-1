import { TitlePartner, TitleHighlight } from '../../ui/h2/TitlePartner';

import styles from './PartnerBlock.module.scss';

export const PartnersBlock = () => (
  <section className={styles.partnerBlock}>
    <div className={styles.desktopLayoutWrapper}>
      <div className={styles.animationTitle}>
        <TitlePartner label='НАША ФИЛОСОФИЯ'>
          надёжный партнер
          <TitleHighlight> успех </TitleHighlight> бизнеса
        </TitlePartner>
      </div>
      {/* ДЕСКТОП */}
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
          <p>
            Мы предлагаем уникальный виджет для создания виртуальных туров,
            которые позволяют вашим клиентам исследовать объекты недвижимости в
            интерактивном формате.
          </p>
        </div>

        {/* ЦЕНТРАЛЬНАЯ КОЛОНКА — ЗАГОЛОВОК */}
        <div className={styles.subTitleWrapper}>
          <p className={styles.subTitle}>
            <span>
              преобразуйте своё <br />
            </span>
            <span>
              представление о покупке недвижимости
              <br />
            </span>
            <span className={styles.textAlignOne}>
              с интерактивными виртуальными
            </span>
            <br />
            <span className={styles.textAlignTwo}>3D турами</span>
          </p>
        </div>
        {/* ПРАВАЯ КОЛОНКА — ДЕКОРАТИВНЫЙ ЭЛЕМЕНТ */}
        <div className={styles.imgPoint}>
          <img
            src='../src/assets/images/GroupPoints.svg'
            alt='декоративный элемент векторной графики в виде абстрактных линий'
          />
        </div>
        {/* <div className={styles.scrollLine}></div> */}
      </div>
    </div>

    {/* МОБИЛЬНАЯ ВЕРСИЯ */}
    <div className={styles.mobileLayoutWrapper}>
      <div className={styles.mobileGrid}>
        <TitlePartner label='НАША ФИЛОСОФИЯ'>
          <div className={styles.mobileTitle}>
            {' '}
            надёжный партнер
            <TitleHighlight> успех бизнеса </TitleHighlight>
          </div>
        </TitlePartner>
        {/* ОПИСАНИЕ */}
        <div className={styles.mobileDescription}>
          <p>
            Мы предлагаем уникальный виджет для создания виртуальных туров,
            которые позволяют вашим клиентам исследовать объекты недвижимости в
            интерактивном формате.
          </p>
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
          <p className={styles.subTitle}> преобразуйте свою</p>
          <p className={styles.subTitle}> реальность</p>
          <p className={styles.subTitle}> с интерактивными </p>
          <p className={styles.subTitle}> виртуальными 3D турами</p>
        </div>
      </div>
    </div>
  </section>
);
