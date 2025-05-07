import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import arrow from '../../../assets/images/arrow.svg';

export function Footer() {
  const { t } = useTranslation();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.start_button}>
        <button onClick={handleScrollToTop}>
          {t('footer.toTop')}
          <img src={arrow} alt='Стрелка' />
        </button>
      </div>

      <div className={styles.footer_content}>
        <div className={`${styles.footer_section} ${styles.contacts_section}`}>
          <h3>{t('footer.contacts')}</h3>
          <p>
            Melikishvili str. 92/16
            <br /> 6004 Batumi, Georgia
            <br /> Copyright ©2024 XR Place
          </p>
        </div>

        <div className={`${styles.footer_section} ${styles.menu_section}`}>
          <h3>{t('footer.menu.about')}</h3>
          <ul className={styles.menu_list}>
            <li>
              <a href='#'>{t('footer.menu.about')}</a>
            </li>
            <li>
              <a href='#'>{t('hero.navbar.how')}</a>
            </li>
            <li>
              <a href='#'>{t('footer.menu.features')}</a>
            </li>
            <li>
              <a href='#'>{t('footer.menu.demo')}</a>
            </li>
          </ul>
        </div>

        <div className={`${styles.footer_section} ${styles.social_section}`}>
          <h3>{t('footer.social')}</h3>
          <ul className={styles.social_list}>
            <li>
              <a href='mailto:hello@xrlace.io'>hello@xrlace.io</a>
            </li>
            <li>
              <a href='#'>Instagram</a>
            </li>
            <li>
              <a href='#'>LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.lable}>XR Place</div>

      <div className={styles.data_cooki_container}>
        <p>{t('footer.copyright')}</p>
        <div className={styles.links}>
          <a href='#'>{t('footer.privacy')}</a>
          <a href='#'>{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
}
