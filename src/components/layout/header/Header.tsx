import styles from './Header.module.scss';
import logoImage from '../../../assets/images/logo.svg';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lng: 'ru' | 'en') => {
    if (lng !== currentLang) i18n.changeLanguage(lng);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImage} alt='Логотип' className={styles.logoImage} />
      </div>

      <div className={styles.menu}>
        <nav className={styles.nav}>
          <a href='#'>{t('header.menu.about')}</a>
          <span className={`${styles.divider} ${styles.firstDivider}`} />
          <a href='#'>{t('header.menu.projects')}</a>
          <span className={`${styles.divider} ${styles.secondDivider}`} />
          <a href='#'>{t('header.menu.team')}</a>
        </nav>

        <div className={styles.languageSwitcher}>
          <div className={styles.activeDot} />
          <button
            className={currentLang === 'en' ? styles.active : styles.inactive}
            type='button'
            onClick={() => changeLanguage('en')}
            aria-label='Switch to English'
          >
            EN
          </button>
          <span className={styles.divider} />
          <button
            className={currentLang === 'ru' ? styles.active : styles.inactive}
            type='button'
            onClick={() => changeLanguage('ru')}
            aria-label='Переключить на русский'
          >
            RU
          </button>
        </div>
      </div>
    </header>
  );
}
