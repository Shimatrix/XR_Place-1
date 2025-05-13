import { TitlePartner, TitleHighlight } from '../../ui/h2/TitlePartner';

import styles from './PartnerBlock.module.scss';

export const PartnersBlock = () => (
  <section className={styles.partnerBlock}>
    <TitlePartner label='НАША ФИЛОСОФИЯ'>
      <div className={styles.animationTitle}> </div>надёжный партнер{' '}
      <TitleHighlight>УСПЕХ</TitleHighlight> бизнеса
    </TitlePartner>
    {/* ДЕСКТОП */}
    <div className={styles.scrollLine} />
    <div className={styles.desktopLayoutWrapper}>
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
  </section>
);
